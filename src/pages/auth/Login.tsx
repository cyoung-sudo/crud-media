import "./Login.css";
// React
import { useState } from "react";
// Routing
import { useNavigate } from "react-router-dom";
// Components
import LoginForm from "../../components/forms/LoginForm";
// APIs
import AuthAPI from "../../apis/AuthAPI.ts";

const Login = () => {
  // Controlled input
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // Hooks
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    AuthAPI.login(username, password)
      .then(res => {
        if(res.data.success) {
          console.log(res.data.user);
          navigate("/");
        } else {
          console.log(res.data.message);
          setUsername("");
          setPassword("");
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <div id="login">
      <h1>Login</h1>
      <div>
        <LoginForm
          username={ username }
          password={ password }
          setUsername={ setUsername }
          setPassword={ setPassword }
          handleSubmit={ handleSubmit }/>
      </div>
    </div>
  )
};

export default Login;