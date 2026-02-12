import { useQuiz } from "../../context/QuizProvider";

function Question() {
  const { currentQuestion } = useQuiz();
   const marks = currentQuestion.marks ?? 1;

  return (
    <div className="md:w-full h-20 flex items-center justify-between max-w-5xl self-center px-2 w-[90%] gap-2">
      {/* Fixed Question Box */}
      <div className="h-20 md:w-full max-w-5xl w-105 bg-white p-4 flex  items-center">
        <h1 className="text-lg   leading-relaxed font-semibold text-blue-950 sm:text-xl lg:text-3xl ">
          {currentQuestion.question}
        </h1>
      </div>
      <span className="text-lg font-semibold text-black sm:text-xl lg:text-2xl w-24">  {marks} {marks === 1 ? "mark" : "marks"}</span>
    </div>
  );
}

export default Question;
