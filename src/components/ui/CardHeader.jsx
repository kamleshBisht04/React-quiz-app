import { useQuiz } from "../../context/QuizProvider";
function CardHeader() {
  const { topic } = useQuiz();
  if (!topic) return null;
  return (
    <div className="mx-auto flex h-28 w-full items-center justify-center gap-4 ">
      <div className="mb-4 text-8xl">{topic.icon}</div>
      <h2 className="text-5xl font-semibold">{topic.name}</h2>
    </div>
  );
}

export default CardHeader;
