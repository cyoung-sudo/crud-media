import "./UserProfile.css";
// React
import { useState, useEffect } from "react";
// Routing
import { useParams } from "react-router-dom";
// APIs
import UserAPI from "../../apis/UserAPI";

const UserProfile = () => {
  // Retrieved data
  const [profileUser, setPorfileUser] = useState(null);
  // Hooks
  const {userId} = useParams();

  useEffect(() => {
    UserAPI.getUser(userId)
      .then(res => {
        if(res.data.success) {
          setPorfileUser(res.data.user);
        } else {
          console.log(res.data.message);
        }
      })
      .catch(err => console.log(err));
  }, [userId]);

  return (
    <div id="userProfile">
      {profileUser && <>
        <div>{profileUser.username}'s profile</div>
      </>}
    </div>
  );
};

export default UserProfile;