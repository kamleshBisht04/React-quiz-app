import { useQuiz } from "../../context/QuizProvider";

function Question() {
  const { currentQuestion } = useQuiz();

  return (
    <div className="w-full flex items-center justify-between max-w-5xl self-center px-2">
      {/* Fixed Question Box */}
      <div className="h-16 max-w-4xl bg-white p-4">
        <h1 className="text-lg leading-relaxed font-semibold text-blue-950 sm:text-xl lg:text-3xl">
          {currentQuestion.question}
        </h1>
      </div>
      <span className="text-lg font-semibold text-black sm:text-xl lg:text-2xl">1 marks</span>
    </div>
  );
}

export default Question;
