import QuizInfo from "./components/quizinfo/quizInfo";
import QuizScreen from "./components/quizscreen/QuizScreen";
import ResultScreen from "./components/resultscreen/ResultScreen";
import StartScreen from "./components/startscreen/StartScreen";
import { useQuiz } from "./context/QuizProvider";

function App() {
  const { screen } = useQuiz();
  return (
    <>
      {screen === "start" && <StartScreen />}
      {screen === "info" && <QuizInfo />}
      {screen === "quiz" && <QuizScreen />}
      {screen === "result" && <ResultScreen />}
    </>
  );
}

export default App;
