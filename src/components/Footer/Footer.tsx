import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

function Footer() {
  const { toggle } = useContext(ThemeContext);
  return (
    <footer className="bg-slate-700 md:bg-pink-600 p-5 text-white text-5xl font-extralight  text-center">
      <button onClick={() => toggle()}>Click me</button>
      Footer
    </footer>
  );
}

export default Footer;
