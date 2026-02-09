import { labels } from "../../constant/const";
import { useQuiz } from "../../context/QuizProvider";

function OptionItem() {
  const { dispatch, answers, currentQuestionIndex, currentQuestion } =
    useQuiz();
  const options = currentQuestion.options;
  const selectedOption = answers[currentQuestionIndex];

  return (
    <div className="mt-6 flex w-full max-w-5xl flex-col items-start gap-6">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => dispatch({ type: "SET_ANSWER", payload: index })}
          className={`flex h-16 w-full max-w-4xl items-center gap-4 rounded-2xl border border-stone-100 px-6 text-lg font-semibold text-blue-950 transition sm:h-18 sm:text-xl md:text-2xl ${selectedOption === index ? "bg-pink-500 text-white hover:bg-pink-500" : "bg-gray-50 hover:bg-pink-200 "}`}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-200 text-xl font-bold text-purple-950">
            {labels[index]}
          </span>
          <span>{option}</span>
        </button>
      ))}
    </div>
  );
}

export default OptionItem;
