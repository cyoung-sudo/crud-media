import "./UsersList";
// Bootstrap
import ListGroup from 'react-bootstrap/ListGroup';

interface Post {
  userId: string,
  username: string,
  title: string;
  text: string;
  createdAt: Date;
}

interface Props {
  posts: Post[];
};

const PostsList: React.FC<Props> = ({ posts }) => {
  return (
    <ListGroup>
      {posts.map((post: Post, idx: number) => (
        <ListGroup.Item key={idx}>
          <div>{post.username}</div>
          <div>{post.title}</div>
          <div>{post.text}</div>
          <div>{new Date(post.createdAt).toDateString()}</div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default PostsList;