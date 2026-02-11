import { useQuiz } from "../../context/QuizProvider";

function Question() {
  const { currentQuestion } = useQuiz();

  return (
    <div className="w-full max-w-5xl self-center px-2">
      {/* Fixed Question Box */}
      <div className="h-16 max-w-4xl bg-white p-4">
        <h1 className="text-lg leading-relaxed font-semibold text-blue-950 sm:text-xl lg:text-3xl">
          {currentQuestion.question}
        </h1>
      </div>
    </div>
  );
}

export default Question;
