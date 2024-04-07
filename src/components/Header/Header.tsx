import { useTheme } from "../../hooks/useTheme";
import Navbar from "../Navbar/Navbar";
import "./Header.scss";

function Header() {
  const {theme} = useTheme(); 
  return (
    <header className="bg-pink-100 dark:bg-pink-900 p-5 text-white text-5xl font-extralight  text-center">
      <h2 className="text-5xl text-orange-500">{theme}</h2>
      <Navbar />
    </header>
  );
}

export default Header;
