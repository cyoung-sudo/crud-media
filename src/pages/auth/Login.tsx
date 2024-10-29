import "./Login.css";
// React
import { useState } from "react";
// Components
import LoginForm from "../../components/forms/LoginForm";
// Hooks
import { useAuth } from "../../hooks/AuthProvider";

const Login = () => {
  // Controlled input
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // Hooks
  const auth = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    auth.login(username, password);
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