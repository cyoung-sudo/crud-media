import "./EditPost.css";
// React
import { useState, useEffect } from "react";
// Routing
import { useNavigate, useLoaderData } from "react-router-dom";
// Components
import PostForm from "../../components/forms/PostForm";
// API
import PostAPI from "../../apis/PostAPI";
// Hooks
import { useAuth } from "../../hooks/AuthProvider";

interface Post {
  _id: string,
  title: string;
  text: string;
}

const EditPost = () => {
  // Loader data
  const post = useLoaderData() as Post;
  // Controlled input
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  // Hooks
  const navigate = useNavigate();
  const auth = useAuth();

  // Prefill inputs
  useEffect(() => {
    setTitle(post.title);
    setText(post.text);
  }, [])

  let handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    PostAPI.editPost(post._id, title, text)
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
  };

  return (
    <div id="editPost">
      <h1>Edit Post</h1>
      <div id="editPost-form">
        <PostForm
          title={title}
          text={text}
          setTitle={setTitle}
          setText={setText}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  )
};

export default EditPost;