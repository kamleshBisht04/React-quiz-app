import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
const QuizContext = createContext();

const initialState = {
  allQuestions: [],
  status: "loading",
  error: null,
  currentQuestionIndex: 0,
  answers: {},
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
    case "NEXT_QUESTION":
      return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
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

    default:
      throw new Error("Unknown Action");
  }
}

function QuizProvider({ children }) {
  const [screen, setScreen] = useState("start");
  const [topic, setTopic] = useState(null);
  const [
    { allQuestions, status, error, currentQuestionIndex, answers },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchQuizData() {
      try {
        const res = await fetch(`http://localhost:9000/quizData`);
        if (!res.ok) throw new Error("Failed to load JSON");
        const data = await res.json();
        // console.log(data);
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

  const lastIndex = totalQuestions - 1;

  return (
    <QuizContext.Provider
      value={{
        screen,
        setScreen,
        topic,
        setTopic,
        status,
        error,
        allQuestions,
        topicQuestions,
        currentQuestion,
        currentQuestionIndex,
        totalQuestions,
        answers,
        lastIndex,
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
