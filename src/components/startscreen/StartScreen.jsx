import { useState } from "react";
import { clickSoundPlay, Topics } from "../../constant/const";
import { useQuiz } from "../../context/QuizProvider";
import { FaGooglePlay } from "react-icons/fa6";
import Header from "../ui/Header";

function StartScreen() {
  const { dispatch } = useQuiz();
  const [tempTopic, setTempTopic] = useState(null);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white">
      <div className="mx-auto flex h-[90vh] w-[70%] flex-col items-center gap-10 md:mt-16">
        <div className="flex w-100 items-center justify-center md:gap-2">
          <Header size="lg" />
        </div>

        <div className="flex flex-col items-center justify-center gap-5 md:gap-16">
          <h1 className="font-semibold uppercase sm:text-3xl md:text-4xl lg:text-5xl">
            Welcome to Intellect
            <span className="font-bold text-sky-500"> quiz</span>
          </h1>
          <p className="font-Inter font-bold text-blue-900 sm:text-2xl md:text-4xl">
            Select a topic below to start your Quiz.
          </p>
        </div>

        {/* Topics grid */}
        <div className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 md:gap-10">
          {Topics.map((item) => {
            const isActive = tempTopic?.id === item.id; // only temporary for CSS
            return (
              <div
                key={item.id}
                onClick={() => setTempTopic(item)} // CSS selection
                className={`flex h-20 w-52 cursor-pointer items-center justify-center gap-4 rounded-xl border-2 border-gray-100 bg-white px-5 py-4 text-lg font-semibold transition-all md:h-24 md:w-56 ${isActive ? "border-b-6 border-b-green-700 bg-blue-100" : " "} `}
              >
                <span className="text-4xl sm:text-5xl md:text-6xl">
                  {item.icon}
                </span>
                <p className="text-2xl">{item.name}</p>
              </div>
            );
          })}
        </div>

        {/* Continue button */}
        <div className="flex h-40 w-full items-center justify-center">
          <button
            disabled={!tempTopic}
            onClick={() =>
              tempTopic &&
              dispatch({ type: "SELECT_TOPIC", payload: tempTopic })
            }
            className={`flex h-16 w-64 items-center justify-around rounded-xl px-8 py-3 text-2xl font-semibold text-white shadow-lg transition-all duration-300 ease-in-out ${
              tempTopic
                ? "bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-105 hover:shadow-2xl"
                : "cursor-not-allowed bg-gray-300"
            }`}
          >
            Continue <FaGooglePlay />
          </button>
        </div>
      </div>
    </div>
  );
}

export default StartScreen;
