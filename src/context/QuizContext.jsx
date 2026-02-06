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

// eslint-disable-next-line react-refresh/only-export-components
export { QuizProvider, useQuiz };
