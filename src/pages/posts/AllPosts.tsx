import "./AllPosts.css";
// Routing
import { useNavigate, useLoaderData } from "react-router-dom";
// Components
import PostsLists from "../../components/lists/PostsList";
// Hooks
import { useAuth } from "../../hooks/AuthProvider";
// Bootstrap
import Button from 'react-bootstrap/Button';

interface Post {
  _id: string,
  userId: string,
  username: string,
  title: string,
  text: string,
  createdAt: Date
};

const AllPosts = () => {
  // Loader data
  const posts = useLoaderData() as Post[];
  // Hooks
  const auth = useAuth();
  const navigate = useNavigate();

  return (
    <div id="allPosts">
      <h1>Posts</h1>
      {auth.authUser && <Button variant="primary" onClick={() => navigate("/posts/new")}>Create Post</Button>}
      <div id="allPosts-list">
        <PostsLists posts={posts}/>
      </div>
    </div>
  );
};

export default AllPosts;