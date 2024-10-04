import "./Navigationbar.css";
// Routing
import { NavLink } from "react-router-dom";
// Hooks
import { useAuth } from "../../hooks/AuthProvider";

const Navigationbar = () => {
  // Hooks
  const auth = useAuth();

  return (
    <div id="navigationbar">
      <div id="navigationbar-logo"><NavLink to="/">CRUD MEDIA</NavLink></div>
      <ul id="navigationbar-links">
        <li><NavLink to="/users">Users</NavLink></li>
        <li><NavLink to="/posts">Posts</NavLink></li>
        {auth.authUser && <li><button onClick={auth.logout}>Logout</button></li>}
        {!auth.authUser && <li><NavLink to="/auth/signup">Signup</NavLink></li>}
        {!auth.authUser && <li><NavLink to="/auth/login">Login</NavLink></li>}
      </ul>
    </div>
  )
};

export default Navigationbar;