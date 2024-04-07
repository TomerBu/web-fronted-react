import { FaHome } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import "./Navbar.scss";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
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

        {isLoggedIn && <NavLink to="/profile"><RxAvatar/></NavLink>}
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
