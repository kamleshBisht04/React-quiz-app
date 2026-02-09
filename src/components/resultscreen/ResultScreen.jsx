function ResultScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-r from-green-200 to-emerald-200 ">
      <div className="w-full max-w-6xl min-h-[80vh] rounded-2xl bg-white p-8 text-center  shadow-2xl">
        <h1 className="mb-4 h-32 text-4xl font-bold text-green-700 flex items-center justify-center ">
          Quiz Finished 🎉
        </h1>

        <p className="text-2xl font-semibold text-blue-950">Your Score</p>

        <p className="mt-4 text-5xl font-extrabold text-purple-600">
          {/* {score} / {totalScore} */}
        </p>
      </div>
    </div>
  );
}

export default ResultScreen;
