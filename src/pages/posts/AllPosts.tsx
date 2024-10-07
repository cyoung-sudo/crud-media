import "./AllPosts.css";
// React
import { useState, useEffect } from "react";
// Components
import PostsLists from "../../components/lists/PostsList";
// APIs
import PostAPI from "../../apis/PostAPI";

const AllPosts = () => {
  // Retrieved data
  const [posts, setPosts] = useState(null);

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
        <div>
          <PostsLists posts={posts}/>
        </div>
      </div>
    );
  }
};

export default AllPosts;