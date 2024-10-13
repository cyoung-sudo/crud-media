import "./PostForm.css";
// Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

interface Props {
  title: string;
  text: string;
  setTitle: (title: string) => void;
  setText: (text: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const PostForm: React.FC<Props> = ({ title, text, setTitle, setText, handleSubmit }) => {
  return (
    <Form id = "login-form" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control 
          onChange={e => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Enter title" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Text</Form.Label>
        <Form.Control 
          onChange={e => setText(e.target.value)}
          value={text}
          as="textarea" rows={3}
          placeholder="Enter text" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default PostForm;