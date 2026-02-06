function Button({ children }) {
  return (
    <button className="h-12 w-40 rounded-lg bg-orange-400 px-8 py-3 text-xl font-semibold text-white hover:bg-orange-500">
      {children}
    </button>
  );
}

export default Button;
