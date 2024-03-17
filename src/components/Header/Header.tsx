import "./Header.scss";
import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <header className="bg-slate-700 md:bg-pink-600 p-5 text-white text-5xl font-extralight  text-center">
      <Navbar />
    </header>
  );
}

export default Header;