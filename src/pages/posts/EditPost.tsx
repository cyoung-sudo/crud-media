import "./EditPost.css";
// React
import { useState, useEffect } from "react";
// Routing
import { useParams, useNavigate } from "react-router-dom";
// Components
import PostForm from "../../components/forms/PostForm";
// API
import PostAPI from "../../apis/PostAPI";
// Hooks
import { useAuth } from "../../hooks/AuthProvider";

const EditPost = () => {
  // Controlled input
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  // Retreived data
  const [post, setPost] = useState(null);
  // Hooks
  const {postId} = useParams();
  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    if(postId) {
      PostAPI.getPost(postId)
      .then(res => {
        if(res.data.success) {
          setPost(res.data.post);
          setTitle(res.data.post.title);
          setText(res.data.post.text);
        }
      })
      .catch(err => console.log(err));
    }
  }, [postId]);

  let handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(postId) {
      PostAPI.editPost(postId, title, text)
      .then(res => {
        if(res.data.success) {
          console.log("Post edited")
          if(auth.authUser) {
            navigate(`/users/${auth.authUser._id}`);
          } else {
            navigate("/posts");
          }
        }
      })
      .catch(err => console.log(err));
    }
  };

  return (
    <div id="editPost">
      <h1>Edit Post</h1>
      {post && <div>
        <PostForm
          title={title}
          text={text}
          setTitle={setTitle}
          setText={setText}
          handleSubmit={handleSubmit}
        />
      </div>}
    </div>
  )
};

export default EditPost;