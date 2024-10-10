import "./UsersList";
// Routing
import { useNavigate } from "react-router-dom";
// Bootstrap
import ListGroup from 'react-bootstrap/ListGroup';

interface User {
  _id: string,
  username: string;
  password: string;
  createdAt: Date;
}

interface Props {
  users: User[];
};

const UsersList: React.FC<Props> = ({ users }) => {
  // Hooks
  const navigate = useNavigate();

  return (
    <ListGroup>
      {users.map((user: User, idx: number) => (
        <ListGroup.Item key={idx}>
          <div><button onClick={() => navigate(`/users/${user._id}`)}>{user.username}</button></div>
          <div>{new Date(user.createdAt).toDateString()}</div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default UsersList;