import "./NewPost.css";
// React
import { useState } from "react";
// Routing
import { useNavigate } from "react-router-dom";
// Components
import PostForm from "../../components/forms/PostForm";
// APIs
import PostAPI from "../../apis/PostAPI";
// Hooks
import { useAuth } from "../../hooks/AuthProvider";
import { usePopup } from "../../hooks/PopupProvider";

const NewPost = () => {
  // Controlled inputs
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  // Hooks
  const navigate = useNavigate();
  const auth = useAuth();
  const authUser = auth.authUser;
  const popup = usePopup();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(authUser) {
      PostAPI.create(title, text)
      .then(res => {
        if(res.data.success) {
          navigate("/posts");
          popup.openPopup("Post Created");
        }
      })
      .catch(err => console.log(err));
    }
  };

  return (
    <div id="newPost">
      <h1>New Post</h1>
      <div id="newPost-form">
        <PostForm
          title={title}
          text={text}
          setTitle={setTitle}
          setText = {setText}
          handleSubmit={handleSubmit}/>
      </div>
    </div>
  )
};

export default NewPost;