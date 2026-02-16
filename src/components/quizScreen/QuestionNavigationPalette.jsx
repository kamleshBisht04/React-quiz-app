import { useQuiz } from "../../context/QuizProvider";

function QuestionNavigationPalette() {
  const { topicQuestions, currentQuestionIndex, answers, dispatch } = useQuiz();
  const totalQuestions = topicQuestions.questions.length;

  return (
    <div className="flex h-110 w-110 items-center justify-center rounded-2xl bg-slate-100 px-6 py-6 shadow-md">
      <div className="flex  h-90 w-90 flex-wrap items-center gap-3 p-3">
        {Array.from({ length: totalQuestions }, (_, i) => {
          const isAnswered = answers[i] !== undefined;
          const isActive = currentQuestionIndex === i;

          return (
            <button
              key={i}
              onClick={() => dispatch({ type: "GOTO_QUESTION", payload: i })}
              className={`flex h-12 w-12 items-center justify-center rounded-full px-4 text-md font-semibold transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : isAnswered
                    ? "bg-green-400 text-white"
                    : "bg-white text-black"
              }`}
            >
              {i + 1}
            </button>
          );
        })}
      </div>

    </div>
  );
}

export default QuestionNavigationPalette;
