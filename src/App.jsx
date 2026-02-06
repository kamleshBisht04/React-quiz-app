import QuizInfo from "./components/quizinfo/quizInfo";
import QuizScreen from "./components/quizscreen/QuizScreen";
import StartScreen from "./components/startscreen/StartScreen";
import { useQuiz } from "./context/QuizContext";

function App() {
  const { screen } = useQuiz();
  return (
    <div>
      {screen === "start" && <StartScreen />}
      {screen === "info" && <QuizInfo />}
      {screen === "quiz" && <QuizScreen />}
    </div>
  );
}

export default App;
