import logo from "../../assets/logo.png";
import { topics } from "../../const/const";

function StartScreen() {
  return (
    <div className="flex flex-col gap-6 md:gap-16">
      <div className="flex w-full items-center justify-center gap-2">
        <img
          className="h-16 w-auto sm:h-22 md:h-28 lg:h-36 xl:h-40"
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
      <div className="flex flex-col items-center justify-center gap-5 md:gap-16">
        <h1 className="font-semibold uppercase sm:text-3xl md:text-5xl lg:text-6xl">
          Welcome to Intellect
          <span className="font-bold text-sky-500"> quest</span>
        </h1>
        <p className="font-Inter font-bold text-blue-900 sm:text-2xl md:text-4xl">
          Select topic below to start your Quiz.
        </p>
      </div>

      {/* <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="flex cursor-pointer flex-col items-center gap-2 rounded-lg border p-4 hover:bg-gray-100"
          >
            <span className="text-3xl text-blue-500">{topic.icon}</span>
            <p className="text-sm font-medium">{topic.name}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default StartScreen;
