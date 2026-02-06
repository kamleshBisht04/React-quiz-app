function Button({ children, onClick, disabled = false, type = "button" }) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`h-12 w-40 rounded-lg px-8 py-3 text-xl font-semibold text-white ${
        disabled
          ? "cursor-not-allowed bg-gray-300"
          : "bg-orange-400 hover:bg-orange-500"
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
