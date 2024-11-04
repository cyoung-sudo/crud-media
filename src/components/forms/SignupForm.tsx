import "./SignupForm.css";
// Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

interface SignupFormProps {
  username: string;
  password: string;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const SignupForm: React.FC<SignupFormProps> = ({ username, password, setUsername, setPassword, handleSubmit }) => {
  return (
    <Form id = "signup-form" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control 
          onChange={e => setUsername(e.target.value)}
          value={username}
          type="text"
          placeholder="Enter username"
          data-testid="signup-username" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          onChange={e => setPassword(e.target.value)}
          value={password}
          type="password" 
          placeholder="Password"
          data-testid="signup-password" />
      </Form.Group>

      <Button 
        variant="primary" 
        type="submit"
        data-testid="signup-submit">
        Submit
      </Button>
    </Form>
  )
};

export default SignupForm;