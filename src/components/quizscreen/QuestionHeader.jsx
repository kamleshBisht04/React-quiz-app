import CardHeader from "../ui/CardHeader";
import { LuAlarmClock } from "react-icons/lu";

function QuestionHeader() {
  return (
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
  );
}

export default QuestionHeader;
