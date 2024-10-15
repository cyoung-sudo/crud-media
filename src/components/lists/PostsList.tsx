import "./PostsList.css";
import { useNavigate } from "react-router-dom";
// Bootstrap
import ListGroup from 'react-bootstrap/ListGroup';

interface Post {
  _id: string,
  userId: string,
  username: string,
  title: string;
  text: string;
  createdAt: Date;
}

interface Props {
  posts: Post[];
  userId?: string;
  editPost?: (id: string) => void;
  deletePost?: (id: string) => void;
};

const PostsList: React.FC<Props> = ({ posts, userId=null, editPost=null, deletePost=null }) => {
  // Hooks
  const navigate = useNavigate();

  return (
    <ListGroup id="postsList">
      {posts.map((post: Post, idx: number) => (
        <ListGroup.Item className="postsList-post" key={idx}>
          <div className="postsList-post-title">{post.title}</div>
          <div className="postsList-post-text">{post.text}</div>
          <div className="postsList-post-username">
            By: <button onClick={() => navigate(`/users/${post.userId}`)}>{post.username}</button>
          </div>
          <div className="postsList-post-date">Posted: {new Date(post.createdAt).toDateString()}</div>
          {(post.userId === userId) && deletePost && editPost && <>
            <button onClick={() => editPost(post._id)}>Edit</button>
            <button onClick={() => deletePost(post._id)}>Delete</button>
          </>}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default PostsList;