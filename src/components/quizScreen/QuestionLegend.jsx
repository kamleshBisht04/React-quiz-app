function QuestionLegend() {
  return (
    <div className="flex h-64 w-full flex-col justify-center gap-4 rounded-2xl bg-gray-100 p-6">
      <Legend color="bg-blue-600" label="Current Question" />
      <Legend color="bg-green-500" label="Answered" />
      <Legend color="bg-white border border-gray-400" label="Not Visited" />
    </div>
  );
}

function Legend({ color, label }) {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex w-100 gap-4 text-xl text-gray-800">
        <span className={`h-6 w-6 rounded-full ${color}`} />
        <span>{label}</span>
      </div>
    </div>
  );
}

export default QuestionLegend;
