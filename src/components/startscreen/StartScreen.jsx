import logo from "../../assets/logo.png";
import quize from "../../assets/quize.jpg";
import { Topics } from "../../const/const";

function StartScreen() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex w-[80%] flex-col items-center justify-center gap-6 md:gap-16">
        {/* logo */}
        <div className="flex w-full items-center justify-center gap-2">
          <img
            className="h-16 w-auto sm:h-20 md:h-28 lg:h-36 xl:h-40"
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
        <div className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Topics.map((topic) => (
            <button
              key={topic.id}
              className="flex h-28 items-center justify-center gap-4 rounded-md border border-gray-200 bg-stone-50 px-5 py-4 text-lg font-semibold shadow transition-all duration-200 hover:scale-105 hover:bg-white hover:shadow-2xl focus:bg-white focus:ring-2 focus:ring-green-600 focus:outline-none active:scale-95"
            >
              <span className="text-4xl sm:text-5xl md:text-6xl">
                {topic.icon}
              </span>
              <p className="text-2xl">{topic.name}</p>
            </button>
          ))}
        </div>
        {/* start section */}
        <div>
          <button className="h-16 w-64 rounded-xl bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 px-8 py-3 text-2xl font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 hover:shadow-2xl focus:ring-purple-400/50 focus:outline-none active:scale-95">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default StartScreen;
