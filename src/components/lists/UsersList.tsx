import "./UsersList.css";
// Routing
import { useNavigate } from "react-router-dom";
// Types
import { User } from "../../types/index.ds";
// Bootstrap
import ListGroup from 'react-bootstrap/ListGroup';

interface UsersListProps {
  users: User[];
};

const UsersList: React.FC<UsersListProps> = ({ users }) => {
  // Hooks
  const navigate = useNavigate();

  return (
    <ListGroup id="usersList">
      {users.map((user: User, idx: number) => (
        <ListGroup.Item className="usersList-user" key={idx}>
          <div className="usersList-user-username">
            <button onClick={() => navigate(`/users/${user._id}`)}>{user.username}</button>
          </div>
          <div className="usersList-user-date">Joined: {new Date(user.createdAt).toDateString()}</div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default UsersList;