import logo from "../../assets/logo.png";
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
              ntellect Quest
            </strong>
          </p>
        </div>
        {/* welcome section */}
        <div className="flex flex-col items-center justify-center gap-5 md:gap-16">
          <h1 className="font-semibold uppercase sm:text-3xl md:text-4xl lg:text-5xl">
            Welcome to Intellect
            <span className="font-bold text-sky-500"> quest</span>
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
              className="flex h-30 transform items-center justify-center gap-4 rounded-md border border-gray-200 bg-stone-50 px-5 py-4 text-lg font-semibold shadow transition-transform duration-200 hover:scale-104 hover:bg-white hover:shadow-2xl focus:bg-white focus:ring-2 focus:ring-green-600 focus:outline-none active:scale-95"
            >
              <span className="text-3xl sm:text-4xl md:text-5xl">
                {topic.icon}
              </span>
              <p className="text-2xl">{topic.name}</p>
            </button>
          ))}
        </div>

        {/* start section */}
      </div>
    </div>
  );
}

export default StartScreen;
