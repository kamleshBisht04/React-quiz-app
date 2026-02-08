import logo from "../../assets/logo.png";
import quize from "../../assets/quize.png";

const sizes = {
  sm: {
    logo: "h-8",
    quiz: "h-6",
    text: "text-lg",
    letter: "text-xl",
    gap: "gap-2",
  },
  md: {
    logo: "h-12",
    quiz: "h-10",
    text: "text-2xl",
    letter: "text-3xl",
    gap: "gap-3",
  },
  lg: {
    logo: "h-24",
    quiz: "h-24",
    text: "text-4xl",
    letter: "text-5xl",
    gap: "gap-4",
  },
};

function Header({ size = "md" }) {
  const s = sizes[size];

  return (
    <div className={`flex items-center ${s.gap}`}>
      <img src={logo} alt="logo" className={`${s.logo} w-auto`} />

      <p className={`font-bold ${s.text}`}>
        <span className={`text-yellow-300 ${s.letter}`}>I</span>
        ntellect
      </p>

      <img src={quize} alt="quiz" className={`${s.quiz} w-auto`} />
    </div>
  );
}

export default Header;
