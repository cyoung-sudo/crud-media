import "./UsersList";
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
  deletePost?: (id: string) => void;
};

const PostsList: React.FC<Props> = ({ posts, userId=null, deletePost=null }) => {
  return (
    <ListGroup>
      {posts.map((post: Post, idx: number) => (
        <ListGroup.Item key={idx}>
          <div>{post.username}</div>
          <div>{post.title}</div>
          <div>{post.text}</div>
          <div>{new Date(post.createdAt).toDateString()}</div>
          {(post.userId === userId) && deletePost && 
            <button onClick={() => deletePost(post._id)}>Delete</button>
          }
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default PostsList;