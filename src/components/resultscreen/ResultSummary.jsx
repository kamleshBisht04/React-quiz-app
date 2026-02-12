import { useQuiz } from "../../context/QuizProvider";
import CardHeader from "../ui/CardHeader";
import Stat from "../ui/Stat";
import Button from "../ui/Button";

function ResultSummary() {
  const { topicQuestions, answers, dispatch } = useQuiz();
  const questions = topicQuestions?.questions || [];

  // ---------- Result calculation ----------
  const total = questions.length;
  let attempted = 0;
  let correct = 0;

  questions.forEach((q, index) => {
    if (answers[index] !== undefined) {
      attempted++;
      if (answers[index] === q.correctOption) correct++;
    }
  });

  const wrong = attempted - correct;

  const percentage = (correct / total) * 100;

  let message = "";

  if (percentage === 100) {
    message = "Perfect score! Outstanding performance 🌟";
  } else if (percentage >= 80) {
    message = "Excellent work! You really know your stuff 💪";
  } else if (percentage >= 60) {
    message = "Good job! A little more practice and you'll ace it 👍";
  } else if (percentage >= 40) {
    message = "Not bad! Keep practicing, you're getting there 🙂";
  } else {
    message = "Don't worry! Practice makes progress 🚀";
  }

  return (
    <>
      <h1 className="mb-4 flex h-20 items-center justify-center text-4xl font-bold text-green-700">
        Quiz Finished 🎉
        <CardHeader />
      </h1>

      <p className="text-center text-2xl font-semibold text-blue-950">
        {message}
      </p>

      <p className="mt-3 text-center text-4xl font-extrabold text-blue-950">
         Score : {correct} / {total}
      </p>

      {/* ---------- SUMMARY ---------- */}
      <div className="mt-10 mb-12 grid max-w-300 grid-cols-4 items-center gap-6 rounded-2xl bg-slate-50 p-16 sm:grid-cols-3 md:h-24 md:w-250 md:grid-cols-4">
        <Stat label="Total" value={total} />
        <Stat label="Attempted" value={attempted} />
        <Stat label="Correct" value={correct} color="text-green-600" />
        <Stat label="Wrong" value={wrong} color="text-red-600" />
      </div>

      <div className="mt-12 flex md:w-200  justify-between">
        <Button
          onClick={() => dispatch({ type: "SELECT_TOPIC", payload: null })}
        >
          Go Home
        </Button>

        <Button onClick={() => dispatch({ type: "START", payload: null })}>
          Restart
        </Button>
      </div>
    </>
  );
}

export default ResultSummary;
