import { useQuiz } from "../../context/QuizProvider";
import Button from "../ui/Button";
import CardHeader from "../ui/CardHeader";

function QuizInfo() {
  const { setTopic, setScreen } = useQuiz();

  const handleBack = () => {
    setTopic(null);
    setScreen("start");
  };

  const handleStart = () => {
    setScreen("quiz");
  };
  return (
    <div className="grid h-screen place-items-center bg-gray-100 px-4">
      {/* Bada Card */}

      <div className="flex min-h-[70vh] w-full max-w-4xl flex-col items-center rounded-xl bg-white p-16 shadow-lg">
        <div className="flex h-full w-[60%] flex-col justify-center gap-6">
          <div className="flex h-64 w-full flex-col items-center justify-center gap-6">
            <CardHeader />
            {/* Heading */}
            <h1 className="text-center text-5xl font-bold">Quiz Information</h1>
          </div>

          {/* Quiz Details */}
          <div className="flex flex-col gap-8 text-center text-2xl font-semibold text-gray-700">
            <p>
              <span className="font-bold">Selected Quiz Topic:</span> JavaScript
            </p>
            <p>
              <span className="font-bold">Total Questions:</span> 25
            </p>
            <p>
              <span className="font-bold">Total Marks:</span> 25
            </p>
            <p>
              <span className="font-bold">Total Time:</span> 12 Minutes 30 sec
            </p>
            <p className="mt-2 bg-stone-100 text-2xl font-semibold text-red-800">
              To save time, you can skip questions. Skipped questions will show
              up at the end of the quiz.
            </p>
          </div>
          {/* Small Button */}
          <div className="flex h-32 w-full items-center justify-center gap-16">
            <Button onClick={handleBack}>Back</Button>
            <Button onClick={handleStart}>Start Quiz </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizInfo;
