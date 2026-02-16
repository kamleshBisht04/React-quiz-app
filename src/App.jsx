import Loader from "./components/loader/Loader";
import StartScreen from "./components/startScreen/StartScreen";
import ResultScreen from "./components/resultScreen/ResultScreen";
import { useQuiz } from "./context/QuizProvider";
import QuizInfo from "./components/quizInfo/QuizInfo"
import QuizScreen from "./components/quizScreen/QuizScreen";


function App() {
  const { status } = useQuiz();
  return (
    <main>
      {status === "loading" && <Loader />}
      {status === "ready" && <StartScreen />}
      {status === "info" && <QuizInfo/>}
      {status === "active" && <QuizScreen />}
      {status === "finished" && <ResultScreen />}
    </main>
  );
}

export default App;
