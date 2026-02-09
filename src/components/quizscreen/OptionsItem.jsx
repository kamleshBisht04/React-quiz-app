import { labels } from "../../constant/const";

function OptionItem({currentQuestion}) {
  const options = currentQuestion.options
  return (
    <div className="mt-6 flex w-full max-w-5xl flex-col items-start gap-6">
      {options.map((option, index) => (
        <button
          key={index}
          className="flex h-16 w-full max-w-4xl items-center gap-4 rounded-2xl border border-stone-100 bg-gray-50 px-6 text-lg font-semibold text-blue-950 transition hover:bg-pink-100 sm:h-20 sm:text-xl md:text-2xl"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-200 text-xl font-bold text-purple-800">
            {labels[index]}
          </span>
          <span>{option}</span>
        </button>
      ))}
    </div>
  );
}

export default OptionItem;
