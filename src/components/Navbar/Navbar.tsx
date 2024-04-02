import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import { FaHome } from "react-icons/fa";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();
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
        {isLoggedIn && (
          <button
            onClick={() => {
              logout();
              navigate("/login");
            }}
          >
            Logout
          </button>
        )}
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
