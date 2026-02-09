import Header from "../ui/Header";
import Button from "../ui/Button";
import { useQuiz } from "../../context/QuizProvider";

function Footer() {
  const { dispatch, currentQuestionIndex, isLast, setScreen } = useQuiz();

  return (
    <div className="flex w-full max-w-5xl flex-col items-center gap-6 sm:h-32 sm:flex-row sm:items-center sm:justify-between">
      {/* Brand / Header */}
      <Header />

      {/* Buttons */}
      <div className="flex w-full justify-center gap-4 sm:w-auto sm:justify-end">
        <Button
          disabled={currentQuestionIndex === 0}
          onClick={() => dispatch({ type: "PREV_QUESTION" })}
        >
          Previous
        </Button>
        <Button
          onClick={() =>
            isLast ? setScreen("result") : dispatch({ type: "NEXT_QUESTION" })
          }
        >
          {currentQuestionIndex === isLast ? "Finish" : "Next"}
        </Button>
      </div>
    </div>
  );
}

export default Footer;
