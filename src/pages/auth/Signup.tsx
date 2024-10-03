import "./Signup.css";
// React
import { useState } from "react";
// Routing
import { useNavigate } from "react-router-dom";
// Components
import SignupForm from "../../components/forms/SignupForm";
// APIs
import UserAPI from "../../apis/UserAPI.ts";

const Signup = () => {
  // Controlled input
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // Hooks
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    UserAPI.create(username, password)
      .then(res => {
        if(res.data.success) {
          console.log(res.data.user)
          navigate("/auth/login");
        } else {
          console.log(res.data.message);
          setUsername("");
          setPassword("");
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <div id="signup">
      <h1>Signup</h1>
      <div>
        <SignupForm
          username={ username }
          password={ password }
          setUsername={ setUsername }
          setPassword={ setPassword }
          handleSubmit={ handleSubmit }/>
      </div>
    </div>
  )
};

export default Signup;