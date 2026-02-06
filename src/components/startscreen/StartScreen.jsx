import logo from "../../assets/logo.png";
import quize from "../../assets/quize.jpg";
import { Topics } from "../../constant/const";
import { useQuiz } from "../../context/QuizContext";
import { FaGooglePlay } from "react-icons/fa6";

function StartScreen() {
  const { topic, setTopic, setScreen } = useQuiz();

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="mx-auto flex h-[90vh] w-[70%] flex-col items-center gap-10 md:mt-16">
        {/* logo */}
        <div className="flex w-full items-center justify-center gap-2">
          <img
            className="h-16 w-auto sm:h-20 md:h-24"
            src={logo}
            alt="quiz logo"
          />
          <p>
            <strong className="sm:text-3xl md:text-5xl lg:text-6xl">
              <span className="text-yellow-300 sm:text-6xl md:text-7xl">I</span>
              ntellect
            </strong>
          </p>

          <img
            className="h-12 w-auto sm:h-20 md:h-24"
            src={quize}
            alt="quiz logo"
          />
        </div>
        {/* welcome section */}
        <div className="flex flex-col items-center justify-center gap-5 md:gap-16">
          <h1 className="font-semibold uppercase sm:text-3xl md:text-4xl lg:text-5xl">
            Welcome to Intellect
            <span className="font-bold text-sky-500"> quiz</span>
          </h1>
          <p className="font-Inter font-bold text-blue-900 sm:text-2xl md:text-4xl">
            Select topic below to start your Quiz.
          </p>
        </div>
        {/* button section */}
        <div className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 md:gap-10">
          {Topics.map((item) => {
            const isActive = topic?.id === item.id;;
            return (
              <button
                key={item.id}
                value={item.name}
                onClick={() => setTopic(item)}
                className={`flex h-20 w-48 items-center justify-center gap-4 rounded-md border px-5 py-4 text-lg font-semibold shadow transition-all duration-200 hover:scale-105 hover:shadow-2xl focus:bg-white focus:text-green-600 focus:ring-1 focus:ring-green-600 focus:outline-none active:scale-95 sm:h-20 md:h-24 md:w-56 md:gap-2 ${isActive ? "bg-white text-green-600 ring-1 ring-green-600" : "border-gray-200 bg-stone-50 hover:bg-white"} `}
              >
                <span className="text-4xl sm:text-5xl md:text-6xl">
                  {item.icon}
                </span>
                <p className="text-2xl">{item.name}</p>
              </button>
            );
          })}
        </div>
        {/* start section */}
        <div className="flex h-40 w-full items-center justify-center">
          <button
            disabled={!topic}
            onClick={() => topic && setScreen("info")}
            className={`flex h-16 w-64 items-center justify-around rounded-xl px-8 py-3 text-2xl font-semibold text-white shadow-lg transition-all duration-300 ease-in-out ${
              topic
                ? "bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-105 hover:shadow-2xl"
                : "cursor-not-allowed bg-gray-300"
            } `}
          >
            Continue <FaGooglePlay />
          </button>
        </div>
      </div>
    </div>
  );
}

export default StartScreen;
