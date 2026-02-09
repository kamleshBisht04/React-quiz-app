import CardHeader from "../ui/CardHeader";
import { LuAlarmClock } from "react-icons/lu";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useQuiz } from "../../context/QuizProvider";

function QuestionHeader() {
  const { currentQuestion, totalQuestions } = useQuiz();
  const questionNo =
    currentQuestion.id < 10 ? `0${currentQuestion.id}` : currentQuestion.id;
  return (
    <div className="flex w-full max-w-5xl flex-col items-center gap-4 sm:h-40 sm:flex-row sm:justify-between">
      <p className="flex  items-center text-5xl font-semibold text-green-600 sm:text-5xl">
        <FaArrowAltCircleRight size={16} />
        {questionNo}
        <span className="text-3xl text-gray-300">/{totalQuestions}</span>
      </p>
      <CardHeader />
      <div className="flex items-center gap-2 text-3xl text-fuchsia-800 sm:text-4xl">
        <LuAlarmClock size={26} />
        <span className="font-semibold">3:38</span>
      </div>
    </div>
  );
}

export default QuestionHeader;
