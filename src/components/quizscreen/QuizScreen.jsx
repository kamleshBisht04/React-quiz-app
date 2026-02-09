import Footer from "../footer/Footer";
import Question from "./Question";
import QuestionHeader from "./QuestionHeader";
import OptionItem from "./OptionsItem";
import { useQuiz } from "../../context/QuizProvider";

function QuizScreen() {
  const { topic, allQuestions, index } = useQuiz();
  const topicQuestions = allQuestions.find((item) => item.id === topic.id);
  const currentQuestion = topicQuestions.questions[index];

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-r from-violet-200 to-pink-200 p-4">
      <div className="flex min-h-[80vh] w-full max-w-7xl flex-col items-center gap-8 rounded-2xl bg-white px-4 py-6 shadow-2xl sm:px-6 lg:px-10">
        <QuestionHeader />
        <Question currentQuestion={currentQuestion} />
        <OptionItem currentQuestion={currentQuestion} />
        <Footer />
      </div>
    </div>
  );
}

export default QuizScreen;
