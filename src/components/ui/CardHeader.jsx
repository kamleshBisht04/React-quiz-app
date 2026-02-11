import { useQuiz } from "../../context/QuizProvider";

function CardHeader() {
  const { topic } = useQuiz();
  if (!topic) return null;

  return (
    <div className="flex w-64 items-center justify-center gap-4">
      {/* Icon */}
      <div className="transform text-8xl transition-transform duration-500 ease-out hover:-translate-y-2 md:text-9xl lg:text-[5rem]">
        {topic.icon}
      </div>

      {/* Name */}
      <h2 className="transform text-3xl font-semibold transition-transform duration-500 ease-out hover:-translate-y-1 md:text-4xl">
        {topic.name}
      </h2>
    </div>
  );
}

export default CardHeader;
