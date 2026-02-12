import Header from "../ui/Header";
import Button from "../ui/Button";
import { useQuiz } from "../../context/QuizProvider";

function Footer() {
  const { dispatch, currentQuestionIndex, lastIndex } = useQuiz();

  function handleSubmit() {
    dispatch({ type: "FINISH" });
  }

  return (
    <>
      <div className="flex h-32 items-end justify-end focus:ring-0 focus:outline-none sm:w-full md:max-w-5xl">
        {/* Brand / Header */}

        {/* Buttons */}
        <div className="flex max-w-3xl gap-4 md:w-full md:justify-end">
          <Button
            disabled={currentQuestionIndex === 0}
            onClick={() => dispatch({ type: "PREV_QUESTION" })}
          >
            Previous
          </Button>
          <Button
            disabled={currentQuestionIndex === lastIndex}
            onClick={() =>
              dispatch({ type: "NEXT_QUESTION", payload: lastIndex })
            }
          >
            Next
          </Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </div>
      <div className="flex justify-center items-center w-full max-w-[100] h-32 ">
        <Header/>
      </div>
    </>
  );
}

export default Footer;
