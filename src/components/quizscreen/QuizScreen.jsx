import { LuAlarmClock } from "react-icons/lu";
import CardHeader from "../ui/CardHeader";
import Button from "../ui/Button";
import Header from "../ui/Header";
import { labels } from "../../constant/const";

function QuizScreen() {
  const options = [
    "npx create-react-app myApp",
    "npm install react",
    "react-create-app myApp",
    "npm start react",
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-r from-violet-200 to-pink-200 p-4">
      <div className="flex min-h-[80vh] w-full max-w-7xl flex-col items-center gap-8 rounded-2xl bg-white px-4 py-6 shadow-2xl sm:px-6 lg:px-10">
        {/* HEADER */}
        <div className="flex w-full max-w-5xl flex-col items-center gap-4 sm:h-40 sm:flex-row sm:justify-between">
          <p className="flex text-4xl font-semibold text-green-600 sm:text-5xl">
            01 <span className="text-3xl text-gray-300">/25</span>
          </p>
          <CardHeader />
          <div className="flex items-center gap-2 text-3xl text-fuchsia-800 sm:text-4xl">
            <LuAlarmClock size={26} />
            <span className="font-semibold">3:38</span>
          </div>
        </div>

        {/* QUESTION */}
        <div className="w-full max-w-5xl self-center px-2">
          <h1 className="text-2xl leading-snug font-semibold text-blue-950 sm:text-3xl lg:text-4xl">
            Which command is used to create a React app?
          </h1>
        </div>

        {/* OPTIONS */}
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

        {/* FOOTER */}
        <div className="flex w-full max-w-5xl flex-col items-center gap-6 sm:h-32 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand / Header */}
          <Header />

          {/* Buttons */}
          <div className="flex w-full justify-center gap-4 sm:w-auto sm:justify-end">
            <Button>Previous</Button>
            <Button>Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizScreen;
