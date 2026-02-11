import Button from "../ui/Button";
import { useQuiz } from "../../context/QuizProvider";
import CardHeader from "../ui/CardHeader";

function ResultScreen() {
  const { topicQuestions, answers, dispatch } = useQuiz();
  const questions = topicQuestions?.questions || [];

  // ---------- Result calculation ----------
  const total = questions.length;
  let attempted = 0;
  let correct = 0;

  questions.forEach((q, index) => {
    if (answers[index] !== undefined) {
      attempted++;
      if (answers[index] === q.correctOption) correct++;
    }
  });

  const wrong = attempted - correct;

  return (
    <div className="flex min-h-screen justify-center bg-linear-to-r from-green-200 to-emerald-200 px-4 py-8">

      <div className="mx-auto mt-20 flex  w-350 flex-col items-center justify-center gap-6 rounded-2xl bg-white p-8 shadow-2xl">
        {/* ---------- TOP RESULT ---------- */}
        <h1 className="mb-4 flex h-20 items-center justify-center text-4xl font-bold text-green-700">
          Quiz Finished 🎉
          <CardHeader />
        </h1>

        <p className="text-center text-2xl font-semibold text-blue-950">
          Your Score
        </p>

        <p className="mt-3 text-center text-5xl font-extrabold text-purple-600">
          {correct} / {total}
        </p>

        {/* ---------- SUMMARY ---------- */}
        <div className="mt-10 mb-12 grid max-w-300 grid-cols-4 items-center gap-6 rounded-2xl bg-slate-50 p-16 sm:grid-cols-3 md:h-24 md:w-250 md:grid-cols-4">
          <Stat label="Total" value={total} />
          <Stat label="Attempted" value={attempted} />
          <Stat label="Correct" value={correct} color="text-green-600" />
          <Stat label="Wrong" value={wrong} color="text-red-600" />
        </div>

        <div className="mt-12 flex w-200 justify-between">
          <Button
            onClick={() => dispatch({ type: "SELECT_TOPIC", payload: null })}
          >
            Go Home
          </Button>

          <Button onClick={() => dispatch({ type: "START", payload: null })}>
            Restart
          </Button>
        </div>

        {/* ---------- QUESTION REVIEW ---------- */}
        <div className="md:gap:10 sm-gap:10 w-115 space-y-10 md:grid md:w-260 md:grid-cols-2 md:gap-8">
          {questions.map((q, index) => {
            const userAnswer = answers[index];
            const isCorrect = userAnswer === q.correctOption;

            return (
              <div
                key={index}
                className="flex flex-col gap-4 rounded-2xl border bg-white p-6 shadow-md sm:p-8 "
              >
                <h2 className="mb-5  text-lg font-semibold text-blue-950 sm:text-xl">
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
                        className={`flex  items-center justify-start gap-20 rounded-lg border px-4 py-3 text-base ${style}`}
                      >
                        <span>{opt}</span>

                        {optIndex === q.correctOption && (
                          <span className="text-md font-semibold text-green-600  ">
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

                <div className="mt-1 text-xl font-medium flex justify-evenly">
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

function Stat({ label, value, color = "text-blue-950" }) {
  return (
    <div className="text-center">
      <p className="text-sm text-slate-500">{label}</p>
      <p className={`text-2xl font-bold ${color}`}>{value}</p>
    </div>
  );
}

export default ResultScreen;
