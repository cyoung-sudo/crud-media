import "./AllPosts.css";
// React
import { useState, useEffect } from "react";
// Routing
import { useNavigate } from "react-router-dom";
// Components
import PostsLists from "../../components/lists/PostsList";
// APIs
import PostAPI from "../../apis/PostAPI";
// Hooks
import { useAuth } from "../../hooks/AuthProvider";

const AllPosts = () => {
  // Retrieved data
  const [posts, setPosts] = useState(null);
  // Hooks
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    PostAPI.getAll()
      .then(res => {
        if(res.data.success) {
          setPosts(res.data.posts);
        }
      })
      .catch(err => console.log(err));
  }, []);

  if(posts) {
    return (
      <div id="allPosts">
        <h1>Posts</h1>
        {auth.authUser && <button onClick={() => navigate("/posts/new")}>Creat Post</button>}
        <div>
          <PostsLists posts={posts}/>
        </div>
      </div>
    );
  }
};

export default AllPosts;