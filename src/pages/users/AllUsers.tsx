import "./AllUsers.css";
// Routing
import { useLoaderData } from "react-router-dom";
// Components
import UsersList from "../../components/lists/UsersList";

interface User {
  _id: string;
  username: string;
  password: string;
  createdAt: Date;
}

const AllUsers = () => {
  // Loader data
  const users = useLoaderData() as User[];

  return (
    <div id="allUsers">
      <h1>Users</h1>
      <div id="allUsers-list">
        <UsersList users={users}/>
      </div>
    </div>
  );
};

export default AllUsers;