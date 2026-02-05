import QuizInfo from "./components/quizinfo/quizInfo";
import StartScreen from "./components/startscreen/StartScreen";
import { useQuiz } from "./context/QuizContext";

function App() {
  const { screen } = useQuiz();
  return (
    <div >
      {screen === "start" && <StartScreen />}
      {screen === "info" && <QuizInfo />}
    </div>
  );
}

export default App;
