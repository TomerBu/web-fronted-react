import { useTheme } from "../../hooks/useTheme";

function Footer() {
  const { toggle } = useTheme();
  return (
    <footer className="bg-slate-700 md:bg-pink-600 p-5 text-white text-5xl font-extralight  text-center">
      <button onClick={() => toggle()}>Click me</button>
      Footer
    </footer>
  );
}

export default Footer;
