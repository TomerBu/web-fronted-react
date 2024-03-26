import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import { FaHome } from "react-icons/fa";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Navbar = () => {
  const abc = () => "abc";
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <nav className="site-navbar">
      <div className="nav-left">
        <NavLink to="/" className="brand">
          Home
          <FaHome />
        </NavLink>
      </div>

      <div className="nav-right">
        {!isLoggedIn && <NavLink to="/register">Register</NavLink>}
        {!isLoggedIn && <NavLink to="/login">Login</NavLink>}
        {isLoggedIn && <button onClick={logout}>Logout</button>}
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
