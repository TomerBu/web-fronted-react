import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import {FaHome} from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="site-navbar">
      <div className="nav-left">
        <NavLink to="/" className='brand'>
          Home
          <FaHome />
        </NavLink>
      </div>

      <div className="nav-right">
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
