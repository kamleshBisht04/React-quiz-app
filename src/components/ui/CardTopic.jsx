import { useQuiz } from "../../context/QuizContext";
function CardTopic() {
  const { topic } = useQuiz();
  if (!topic) return null;
  return (
    <div className="mx-auto flex w-full items-center justify-center gap-4 pt-6">
      <div className="mb-4 text-7xl">{topic.icon}</div>
      <h2 className="text-3xl font-semibold">{topic.name}</h2>
    </div>
  );
}

export default CardTopic;
