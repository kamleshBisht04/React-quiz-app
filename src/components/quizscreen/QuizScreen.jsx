import { LuAlarmClock } from "react-icons/lu";
import CardHeader from "../ui/CardHeader";
import Button from "../ui/Button";
import Header from "../ui/Header";

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
        <div className="mt-6 flex w-full max-w-5xl flex-col gap-6">
          {options.map((option, index) => (
            <button
              key={index}
              className="flex h-16 w-full max-w-3xl items-center justify-start rounded-2xl border border-stone-50 bg-gray-50 px-6 text-lg font-semibold text-blue-950 transition hover:bg-pink-100 sm:h-20 sm:text-xl md:text-2xl"
            >
              {option}
            </button>
          ))}
        </div>

        {/* FOOTER */}
        <div className="flex w-full max-w-5xl flex-col justify-between items-center  sm:h-32 sm:flex-row sm:justify-end">
          <Header />
          <div className="flex w-full gap-4 justify-end">
            <Button>Previous</Button>
            <Button>Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizScreen;
