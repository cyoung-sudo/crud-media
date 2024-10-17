import "./UserProfile.css";
// Routing
import { useNavigate, useLoaderData } from "react-router-dom";
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

interface Post {
  _id: string,
  userId: string,
  username: string,
  title: string,
  text: string,
  createdAt: Date
};

interface LoaderData {
  profileUser: User;
  profilePosts: Post[];
}

const UserProfile = () => {
  // Loader data
  const { profileUser, profilePosts } = useLoaderData() as LoaderData;
  // Hooks
  const navigate = useNavigate();
  const auth = useAuth();
  const authUser = auth.authUser;
  

  let handleEditPost = (postId: string) => {
    navigate(`/posts/edit/${postId}`);
  };

  let handleDeletePost = (postId: string) => {
    PostAPI.deletePost(postId)
    .then(res => {
      if(res.data.success) {
        // fetcher.reload();
        navigate(".", { replace: true });
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
    <div id="userProfile">
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
    </div>
  );
};

export default UserProfile;