import { FaPlay } from "react-icons/fa";

function QuizInfo({ topic, totalQuestions, totalScore, totalTime, onStart }) {
  return (
    <div className="min-h-screen flex justify-center bg-gray-100 pt-10 items-center ">
      {/* Card */}
      <div className="w-[90%] h-200  max-w-3xl rounded-xl bg-white px-6 py-10shadow-lg md:px-12">
        
        {/* Header */}
        <div className="mb-6 flex items-center justify-center gap-4">
          <div className="rounded border-2 border-dashed px-3 py-2 font-bold">
            XQ
          </div>
          <h2 className="font-serif text-xl">Xeven Quiz</h2>
        </div>

        {/* Title */}
        <h1 className="mb-8 text-center text-2xl font-bold text-purple-700">
          XEVEN QUIZ
        </h1>

        {/* Info */}
        <div className="space-y-4 text-center text-base">
          <p>
            Selected Quiz Topic:{" "}
            <span className="font-semibold text-purple-700">{topic}</span>
          </p>

          <p>Total questions to attempt: {totalQuestions}</p>

          <p>
            Score in total:{" "}
            <span className="font-semibold text-purple-700">
              {totalScore}
            </span>
          </p>

          <p>
            Total time:{" "}
            <span className="font-semibold text-purple-700">
              {totalTime} minutes
            </span>
          </p>

          <p className="mt-6 text-sm text-gray-600">
            To save time, you can skip questions. Skipped questions will
            show up at the end of the quiz.
          </p>
        </div>

        {/* Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={onStart}
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-700 to-pink-400 px-8 py-3 font-semibold text-white transition hover:scale-105"
          >
            <FaPlay />
            Start
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizInfo;
