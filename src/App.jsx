import Loader from "./components/loader/Loader";
import StartScreen from "./components/startscreen/StartScreen";
import QuizScreen from "./components/quizscreen/QuizScreen";
import ResultScreen from "./components/resultscreen/ResultScreen";
import { useQuiz } from "./context/QuizProvider";
import QuizInfo from "./components/quizinfo/QuizInfo"

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
