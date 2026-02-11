import CardHeader from "../ui/CardHeader";
import { LuAlarmClock } from "react-icons/lu";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useQuiz } from "../../context/QuizProvider";
import { formatTime } from "../../constant/const";
import { useEffect } from "react";

function QuestionHeader() {
  const { currentQuestion, totalQuestions, secondRemaining, dispatch } =
    useQuiz();
  const questionNo =
    currentQuestion.id < 10 ? `0${currentQuestion.id}` : currentQuestion.id;

  useEffect(
    function () {
      const tickId = setInterval(function () {
        dispatch({ type: "TICK" });
      }, 1000);

      return () => clearInterval(tickId);
    },
    [dispatch],
  );
  return (
    <div className="flex w-full max-w-5xl flex-col items-center gap-4 sm:h-40 sm:flex-row sm:justify-between">
      {/* Question Number */}
      <p className="flex w-24 items-center justify-center gap-2 text-5xl font-semibold text-green-600 sm:text-5xl">
        <FaArrowAltCircleRight size={28} />
        {questionNo}
        <span className="text-3xl text-gray-300">/{totalQuestions}</span>
      </p>

      {/* Card Header */}
      <CardHeader />

      {/* Timer */}
      <div className="flex w-32  items-center justify-center gap-2 text-emerald-700  ">
        <LuAlarmClock size={24}  />
        <span className=" w-20  text-3xl font-semibold text-fuchsia-800  ">
          {formatTime(secondRemaining)}
        </span>
      </div>
    </div>
  );
}

export default QuestionHeader;
