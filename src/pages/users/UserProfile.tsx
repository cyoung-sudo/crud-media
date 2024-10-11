import "./UserProfile.css";
// React
import { useState, useEffect } from "react";
// Routing
import { useParams } from "react-router-dom";
// Components
import PostsList from "../../components/lists/PostsList";
// APIs
import UserAPI from "../../apis/UserAPI";
import PostAPI from "../../apis/PostAPI";
// Hooks
import { useAuth } from "../../hooks/AuthProvider";

const UserProfile = () => {
  // Retrieved data
  const [profileUser, setPorfileUser] = useState(null);
  const [profilePosts, setPorfilePosts] = useState(null);
  // Refresh
  const [refresh, setRefresh] = useState(true);
  // Hooks
  const {userId} = useParams();
  const auth = useAuth();

  useEffect(() => {
    // Retrieve user
    UserAPI.getUser(userId)
    .then(res => {
      if(res.data.success) {
        setPorfileUser(res.data.user);
      }
      // Retrueve user's posts
      return PostAPI.getForUser(userId);
    })
    .then(res => {
      if(res.data.success) {
        setPorfilePosts(res.data.posts);
      }
    })
    .catch(err => console.log(err));
  }, [userId, refresh]);

  let handleDeletePost = (postId: string) => {
    PostAPI.deletePost(postId)
    .then(res => {
      if(res.data.success) {
        setRefresh(!refresh);
      }
    })
    .catch(err => console.log(err));
  };

  return (
    <>
      {profileUser && profilePosts && <div id="userProfile">
        <h1>{profileUser.username}'s profile</h1>

        <div>
          <PostsList 
            posts={profilePosts} 
            userId={auth.authUser && auth.authUser._id}
            deletePost={handleDeletePost}/>
        </div>
      </div>}
    </>
  );
};

export default UserProfile;