import { useQuiz } from "../../context/QuizProvider";

function Question() {
  const { currentQuestion } = useQuiz();
  return (
    <div className="w-full max-w-5xl self-center px-2">
      <h1 className="text-2xl leading-snug font-semibold text-blue-950 sm:text-3xl lg:text-4xl">
        {currentQuestion.question}
      </h1>
    </div>
  );
}

export default Question;
