import "./Header.scss";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

function Header() {
  const {theme} = useContext(ThemeContext); 
  return (
    <header className="bg-slate-700 md:bg-pink-600 p-5 text-white text-5xl font-extralight  text-center">
      <h2 className="text-5xl text-orange-500">{theme}</h2>
      <Navbar />
    </header>
  );
}

export default Header;
