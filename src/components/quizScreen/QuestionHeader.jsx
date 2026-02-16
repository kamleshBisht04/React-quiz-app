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
  const [min, sec] = formatTime(secondRemaining);
  const totalTime = `${min.toString().padStart(2, "0")}:${sec
    .toString()
    .padStart(2, "0")}`;

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
    <div className="flex h-32 w-115 items-center gap-4 sm:h-40 sm:justify-between md:w-5xl">
      {/* Question Number */}
      <p className="flex w-24 items-center justify-center gap-2 text-5xl font-semibold text-green-600 sm:text-5xl">
        <FaArrowAltCircleRight size={28} />
        {questionNo}
        <span className="text-3xl text-gray-300">/{totalQuestions}</span>
      </p>

      {/* Card Header */}
      <CardHeader />

      {/* Timer */}
      <div className="flex w-32 items-center justify-center gap-2 text-emerald-700">
        <LuAlarmClock size={24} />
        <span className="w-20 text-3xl font-semibold text-fuchsia-800">
          {totalTime}
        </span>
      </div>
    </div>
  );
}

export default QuestionHeader;
