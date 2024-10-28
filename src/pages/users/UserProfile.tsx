import "./UserProfile.css";
// React
import { useState, useEffect } from "react";
// Routing
import { useNavigate, useLoaderData, useLocation } from "react-router-dom";
// Components
import PostsList from "../../components/lists/PostsList";
// APIs
import UserAPI from "../../apis/UserAPI";
import PostAPI from "../../apis/PostAPI";
// Hooks
import { useAuth } from "../../hooks/AuthProvider";
import usePagination from "../../hooks/usePagination";
import { usePopup } from "../../hooks/PopupProvider";
// Types
import { User } from "../../types/index.ds";
import { Post } from "../../types/index.ds";
// Bootstrap
import Button from 'react-bootstrap/Button';
// Icons
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

interface LoaderData {
  profileUser: User;
  profilePosts: Post[];
}

const UserProfile = () => {
  // Loader data
  const { profileUser, profilePosts } = useLoaderData() as LoaderData;
  // Page data
  const [pageData, setPageData] = useState<Post[] | null>(null);
  // Hooks
  const navigate = useNavigate();
  const auth = useAuth();
  const authUser = auth.authUser;
  const { currentPage, totalPages, currentData, nextPage, prevPage } = usePagination(profilePosts, 10);
  const popup = usePopup();
  const location = useLocation();

  useEffect(() => {
    let pagePosts = currentData() as Post[];
    setPageData(pagePosts);
  }, [currentPage, location])

  let handleEditPost = (postId: string) => {
    navigate(`/posts/edit/${postId}`);
  };

  let handleDeletePost = (postId: string) => {
    PostAPI.deletePost(postId)
    .then(res => {
      if(res.data.success) {
        navigate(".", { replace: true });
        popup.openPopup("Deleted Post");
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
          popup.openPopup("Deleted User");
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

      {pageData && 
        <div id="userProfile-list">
          <PostsList 
            posts={pageData} 
            userId={authUser ? authUser._id : undefined}
            editPost={handleEditPost}
            deletePost={handleDeletePost}/>
        </div>
      }

      <div id="userProfile-pagination">
        <Button onClick={prevPage} variant="primary"><FaArrowLeftLong/></Button>
        <span>{currentPage}/{totalPages}</span>
        <Button onClick={nextPage} variant="primary"><FaArrowRightLong/></Button>
      </div>
    </div>
  );
};

export default UserProfile;