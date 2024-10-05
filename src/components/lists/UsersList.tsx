import "./UsersList";
// Bootstrap
import ListGroup from 'react-bootstrap/ListGroup';

interface User {
  username: string;
  password: string;
  createdAt: Date;
}

interface Props {
  users: User[];
};

const UsersLists: React.FC<Props> = ({ users }) => {
  return (
    <ListGroup>
      {users.map((user: User, idx: number) => (
        <ListGroup.Item key={idx}>
          <div>{user.username}</div>
          <div>{new Date(user.createdAt).toDateString()}</div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default UsersLists;