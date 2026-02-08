import QuizInfo from "./components/quizinfo/quizInfo";
import QuizScreen from "./components/quizscreen/QuizScreen";
import StartScreen from "./components/startscreen/StartScreen";
import { useQuiz } from "./context/QuizProvider";

function App() {
  const { screen } = useQuiz();
  return (
    <>
      {screen === "start" && <StartScreen />}
      {screen === "info" && <QuizInfo />}
      {screen === "quiz" && <QuizScreen />}
    </>
  );
}

export default App;
