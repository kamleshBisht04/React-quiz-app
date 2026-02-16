import Footer from "../footer/Footer";
import QuestionHeader from "./QuestionHeader";
import OptionItem from "./OptionsItem";
import QuestionLegend from "./QuestionLegend";
import Question from "../quizScreen/Question";
import QuestionNavigationPalette from "./QuestionNavigationPalette";

function QuizScreen() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-linear-to-r from-violet-200 to-pink-200 p-4">
      <div className="flex w-full flex-wrap  justify-center gap-16 md:gap-32 ">
        <div className="flex min-h-[72vh] max-w-7xl flex-col items-center rounded-2xl bg-white px-4 py-6 shadow-2xl sm:px-6 md:w-full md:gap-2 lg:px-10 bt-10 border-b-10 border-sky-900 ">
          <QuestionHeader />
          <Question />
          <OptionItem />
          <Footer />
        </div>
        <div className="flex flex-col gap-10">
          <QuestionNavigationPalette />
          <QuestionLegend />
        </div>
      </div>
    </div>
  );
}

export default QuizScreen;
