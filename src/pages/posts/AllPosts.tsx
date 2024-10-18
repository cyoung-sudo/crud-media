import "./AllPosts.css";
// React
import { useState, useEffect } from "react";
// Routing
import { useNavigate, useLoaderData } from "react-router-dom";
// Components
import PostsLists from "../../components/lists/PostsList";
// Hooks
import { useAuth } from "../../hooks/AuthProvider";
import usePagination from "../../hooks/usePagination";
// Bootstrap
import Button from 'react-bootstrap/Button';
// Icons
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

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
  // Page data
  const [pageData, setPageData] = useState<Post[] | null>(null)
  // Hooks
  const auth = useAuth();
  const navigate = useNavigate();
  const { currentPage, totalPages, currentData, nextPage, prevPage } = usePagination(posts, 10);

  useEffect(() => {
    let pagePosts = currentData() as Post[];
    setPageData(pagePosts);
  }, [currentPage])

  return (
    <div id="allPosts">
      <h1>Posts</h1>
      {auth.authUser && <Button variant="primary" onClick={() => navigate("/posts/new")}>Create Post</Button>}

      {pageData && 
        <div id="allPosts-list">
          <PostsLists posts={pageData}/>
        </div>
      }

      <div id="allPosts-pagination">
        <Button onClick={prevPage} variant="primary"><FaArrowLeftLong/></Button>
        <span>{currentPage}/{totalPages}</span>
        <Button onClick={nextPage} variant="primary"><FaArrowRightLong/></Button>
      </div>
    </div>
  );
};

export default AllPosts;