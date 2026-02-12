function Stat({ label, value, color = "text-blue-950" }) {
  return (
    <div className="text-center">
      <p className="text-xl font-semibold text-slate-500">{label}</p>
      <p className={`text-2xl font-bold ${color}`}>{value}</p>
    </div>
  );
}

export default Stat;
