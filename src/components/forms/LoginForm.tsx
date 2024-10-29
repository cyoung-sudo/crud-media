import "./LoginForm.css";
// Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

interface LoginProps {
  username: string;
  password: string;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const LoginForm: React.FC<LoginProps> = ({ username, password, setUsername, setPassword, handleSubmit }) => {
  return (
    <Form id = "login-form" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="login-username">Username</Form.Label>
        <Form.Control 
          id="login-username"
          onChange={e => setUsername(e.target.value)}
          value={username}
          type="text"
          placeholder="Enter username" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="login-password">Password</Form.Label>
        <Form.Control 
          id="login-password"
          onChange={e => setPassword(e.target.value)}
          value={password}
          type="password" 
          placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
};

export default LoginForm;