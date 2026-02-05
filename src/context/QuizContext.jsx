import { createContext, useContext, useState } from "react";

const QuizContext = createContext();

function QuizProvider({ children }) {
  const [screen, setScreen] = useState("start");
  const [topic, setTopic] = useState(null);
  return (
    <QuizContext.Provider
      value={{
        screen,
        setScreen,
        topic,
        setTopic,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  return context;
}

export { QuizProvider, useQuiz };
