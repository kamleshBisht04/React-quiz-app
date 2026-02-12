import { useQuiz } from "../../context/QuizProvider";
import ResultSummary from "./ResultSummary";

function ResultScreen() {
  const { topicQuestions, answers } = useQuiz();
  const questions = topicQuestions?.questions || [];

  return (
    <div className="flex min-h-screen justify-center bg-linear-to-r from-green-200 to-emerald-200 px-4 py-8">
      <div className="mx-auto mt-20 flex w-350 flex-col items-center justify-center gap-6 rounded-2xl bg-white p-8 shadow-2xl">
        {/* ---------- TOP RESULT ---------- */}
        <ResultSummary />

        {/* ---------- QUESTION REVIEW ---------- */}
        <div className="md:gap:10 sm-gap:10 w-115 space-y-10 md:grid md:w-260 md:grid-cols-2 md:gap-8">
          {questions.map((q, index) => {
            const userAnswer = answers[index];
            const isCorrect = userAnswer === q.correctOption;
            return (
              <div
                key={index}
                className="flex flex-col gap-4 rounded-2xl border border-gray-300 bg-white p-6 shadow-md sm:p-8"
              >
                <h2 className="mb-5 text-lg font-semibold text-blue-950 sm:text-xl">
                  Q{index + 1}. {q.question}
                </h2>

                <div className="space-y-3">
                  {q.options.map((opt, optIndex) => {
                    let style = "border-slate-200";

                    if (optIndex === q.correctOption) {
                      style = "border-green-500 bg-green-50";
                    }

                    if (
                      optIndex === userAnswer &&
                      userAnswer !== q.correctOption
                    ) {
                      style = "border-red-500 bg-red-50";
                    }

                    return (
                      <div
                        key={optIndex}
                        className={`flex items-center justify-start gap-6 rounded-md border border-gray-50 px-4 py-3 text-base ${style}`}
                      >
                        <span className="w-90 px-6 text-xl">{opt}</span>

                        {optIndex === q.correctOption && (
                          <span className="text-md font-semibold text-green-600">
                            Correct
                          </span>
                        )}

                        {optIndex === userAnswer &&
                          userAnswer !== q.correctOption && (
                            <span className="text-xs font-semibold text-red-600">
                              Your Answer
                            </span>
                          )}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-1 flex justify-evenly text-xl font-medium">
                  {userAnswer === undefined ? (
                    <span className="text-yellow-600">Not Attempted</span>
                  ) : isCorrect ? (
                    <span className="text-green-600">Correct ✔</span>
                  ) : (
                    <span className="text-red-600">Wrong ✖</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ResultScreen;
