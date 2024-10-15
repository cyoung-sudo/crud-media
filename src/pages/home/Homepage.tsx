import "./Homepage.css";
// Routing
import { useNavigate } from "react-router-dom";
// Bootstrap
import Button from 'react-bootstrap/Button';
// Icons
import { IoEnterOutline } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";
import { FaUsers } from "react-icons/fa6";

const Homepage = () => {
  // Hooks
  const navigate = useNavigate();

  return (
    <div id="homepage">
      <div>
        <h1><span><IoEnterOutline/></span> Join</h1>
        <p>Create an account & join the community</p>
        <Button onClick={() => navigate("/auth/signup")}>Signup</Button>
      </div>

      <div>
        <h1><span><TfiWrite/></span> Posts</h1>
        <p>View all posts from our users</p>
        <Button onClick={() => navigate("/posts")}>View Posts</Button>
      </div>

      <div>
        <h1><span><FaUsers/></span> Users</h1>
        <p>View all users in our community</p>
        <Button onClick={() => navigate("/users")}>View Users</Button>
      </div>
    </div>
  )
};

export default Homepage;