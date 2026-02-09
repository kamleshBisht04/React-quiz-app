import Header from "../ui/Header";
import Button from "../ui/Button";

function Footer() {
  return (
    <div className="flex w-full max-w-5xl flex-col items-center gap-6 sm:h-32 sm:flex-row sm:items-center sm:justify-between">
      {/* Brand / Header */}
      <Header />

      {/* Buttons */}
      <div className="flex w-full justify-center gap-4 sm:w-auto sm:justify-end">
        <Button>Previous</Button>
        <Button>Next</Button>
      </div>
    </div>
  );
}

export default Footer;
