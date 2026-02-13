import { createContext, useContext, useEffect, useReducer } from "react";
import { db } from "../firebase" // firebase.js se
import { collection, getDocs } from "firebase/firestore";

const QuizContext = createContext();

const SEC_PER_QUESTION = 30;
// status: "loading" | "ready" | "info" | "active" | "finished"

const initialState = {
  allQuestions: [],
  status: "loading",
  error: null,
  topic: null,
  currentQuestionIndex: 0,
  answers: {},
  secondRemaining: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "DATA_RECEIVED":
      return { ...state, allQuestions: action.payload, status: "ready" };
    case "DATA_ERROR":
      return {
        ...state,
        error: action.payload,
        status: "error",
      };

    case "SELECT_TOPIC":
      return {
        ...state,
        topic: action.payload,
        status: action.payload ? "info" : "ready", // if null → ready, else info
        currentQuestionIndex: 0,
        answers: {},
      };

    case "START": {
      // console.log(state);
      const totalQuestions =
        state.allQuestions.find((item) => item.id === state.topic?.id)
          ?.questions?.length || 0;
      return {
        ...state,
        status: "active",
        secondRemaining: totalQuestions * SEC_PER_QUESTION,
      };
    }

    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
      };
    case "PREV_QUESTION":
      return {
        ...state,
        currentQuestionIndex:
          state.currentQuestionIndex > 0 ? state.currentQuestionIndex - 1 : 0,
      };
    case "SET_ANSWER":
      return {
        ...state,
        answers: {
          ...state.answers,
          [state.currentQuestionIndex]: action.payload,
        },
      };
    case "TICK":
      return {
        ...state,
        secondRemaining:
          state.secondRemaining > 0 ? state.secondRemaining - 1 : 0,
        status: state.secondRemaining === 1 ? "finished" : state.status,
      };

    case "FINISH":
      return {
        ...state,
        status: "finished",
      };

    case "GOTO_QUESTION":
      return {
        ...state,
        currentQuestionIndex: action.payload,
      };

    default:
      throw new Error("Unknown Action");
  }
}

function QuizProvider({ children }) {
  const [
    {
      topic,
      allQuestions,
      status,
      error,
      currentQuestionIndex,
      answers,
      secondRemaining,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   async function fetchQuizData() {
  //     try {
  //       const res = await fetch(`http://localhost:9000/quizData`);
  //       if (!res.ok) throw new Error("Failed to load JSON");
  //       const data = await res.json();
  //       // console.log(data);
  //       dispatch({ type: "DATA_RECEIVED", payload: data });
  //     } catch (err) {
  //       dispatch({ type: "DATA_ERROR", payload: err.message });
  //     }
  //   }
  //   fetchQuizData();
  // }, []);


  useEffect(() => {
  async function fetchQuizData() {
    try {
      const quizCol = collection(db, "quizzes"); // Firestore collection name
      const quizSnapshot = await getDocs(quizCol);
      const data = quizSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      dispatch({ type: "DATA_RECEIVED", payload: data });
    } catch (err) {
      dispatch({ type: "DATA_ERROR", payload: err.message });
    }
  }

  fetchQuizData();
}, []);



  const topicQuestions = allQuestions.find((item) => item.id === topic?.id);
  
  const currentQuestion =
  topicQuestions?.questions?.[currentQuestionIndex] || null;
  
  const totalQuestions = topicQuestions?.questions?.length || 0;
  const totaltime= totalQuestions * SEC_PER_QUESTION;

  const lastIndex = totalQuestions - 1;

  return (
    <QuizContext.Provider
      value={{
        topic,
        status,
        error,
        allQuestions,
        topicQuestions,
        currentQuestion,
        currentQuestionIndex,
        totalQuestions,
        answers,
        lastIndex,
        secondRemaining,
        totaltime,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) throw new Error("useQuiz must be used inside QuizProvider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { QuizProvider, useQuiz };
