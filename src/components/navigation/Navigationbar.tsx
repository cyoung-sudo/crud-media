import "./Navigationbar.css";
// Routing
import { NavLink } from "react-router-dom";

const Navigationbar = () => {
  return (
    <div id="navigationbar">
      <div id="navigationbar-logo"><NavLink to="/">CRUD MEDIA</NavLink></div>
      <ul id="navigationbar-links">
        <li><NavLink to="/users">Users</NavLink></li>
        <li><NavLink to="/posts">Posts</NavLink></li>
        <li><NavLink to="/auth/signup">Signup</NavLink></li>
        <li><NavLink to="/auth/login">Login</NavLink></li>
      </ul>
    </div>
  )
};

export default Navigationbar;