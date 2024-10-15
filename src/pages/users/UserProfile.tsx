import "./UserProfile.css";
// React
import { useState, useEffect } from "react";
// Routing
import { useParams, useNavigate } from "react-router-dom";
// Components
import PostsList from "../../components/lists/PostsList";
// APIs
import UserAPI from "../../apis/UserAPI";
import PostAPI from "../../apis/PostAPI";
// Hooks
import { useAuth } from "../../hooks/AuthProvider";
// Bootstrap
import Button from 'react-bootstrap/Button';

interface User {
  _id: string;
  username: string;
};

const UserProfile = () => {
  // Retrieved data
  const [profileUser, setPorfileUser] = useState<User | null>(null);
  const [profilePosts, setPorfilePosts] = useState(null);
  // Refresh
  const [refresh, setRefresh] = useState(true);
  // Hooks
  const {userId} = useParams();
  const navigate = useNavigate();
  const auth = useAuth();
  const authUser = auth.authUser;

  useEffect(() => {
    if(userId) {
      // Retrieve user
      UserAPI.getUser(userId)
      .then(res => {
        if(res.data.success) {
          setPorfileUser(res.data.user);
        }
        // Retrieve user's posts
        return PostAPI.getForUser(userId);
      })
      .then(res => {
        if(res.data.success) {
          setPorfilePosts(res.data.posts);
        }
      })
      .catch(err => console.log(err));
    }
  }, [userId, refresh]);

  let handleEditPost = (postId: string) => {
    navigate(`/posts/edit/${postId}`);
  };

  let handleDeletePost = (postId: string) => {
    PostAPI.deletePost(postId)
    .then(res => {
      if(res.data.success) {
        setRefresh(!refresh);
      }
    })
    .catch(err => console.log(err));
  };

  let handleDeleteUser = () => {
    if(authUser) {
      // Logout
      auth.logout();
      // Delete user
      UserAPI.deleteUser(authUser._id)
      .then(res => {
        if(res.data.success) {
          console.log("Deleted Account")
        }
      })
      .catch(err => console.log(err));
    }
  }

  return (
    <>
      {profileUser && profilePosts && <div id="userProfile">
        <h1>{profileUser.username}'s profile</h1>

        {auth.authUser && (profileUser._id === auth.authUser._id) && 
          <Button variant="danger" onClick={handleDeleteUser}>Delete Account</Button>
        }

        <div id="userProfile-list">
          <PostsList 
            posts={profilePosts} 
            userId={authUser ? authUser._id : undefined}
            editPost={handleEditPost}
            deletePost={handleDeletePost}/>
        </div>
      </div>}
    </>
  );
};

export default UserProfile;