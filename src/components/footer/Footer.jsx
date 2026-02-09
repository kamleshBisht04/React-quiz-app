import Header from "../ui/Header";
import Button from "../ui/Button";
import { useQuiz } from "../../context/QuizProvider";

function Footer() {
  const { dispatch, currentQuestionIndex, lastIndex, setScreen } = useQuiz();

  function handleSubmit() {
    setScreen("result");
  }

  return (
    <div className="flex w-full max-w-5xl flex-col items-center gap-6 focus:ring-0 focus:outline-none sm:h-32 sm:flex-row sm:items-center sm:justify-between">
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
          disabled={currentQuestionIndex === lastIndex}
          onClick={() => dispatch({ type: "NEXT_QUESTION" })}
        >
          Next
        </Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
}

export default Footer;
