import "./AllUsers.css";
// React
import { useState, useEffect } from "react";
// Components
import UsersList from "../../components/lists/UsersList";
// APIs
import UserAPI from "../../apis/UserAPI";

const AllUsers = () => {
  // Retrieved data
  const [users, setUsers] = useState(null);

  useEffect(() => {
    UserAPI.getAll()
    .then(res => {
      if(res.data.success) {
        setUsers(res.data.users);
      }
    })
    .catch(err => console.log(err));
  }, [])

  if(users) {
    return (
      <div id="allUsers">
        <h1>Users</h1>
        <div>
          <UsersList users={users}/>
        </div>
      </div>
    )
  }
};

export default AllUsers;