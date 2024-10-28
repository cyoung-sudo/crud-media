import "./AllUsers.css";
// React
import { useState, useEffect } from "react";
// Routing
import { useLoaderData } from "react-router-dom";
// Components
import UsersList from "../../components/lists/UsersList";
// Hook
import usePagination from "../../hooks/usePagination";
// Types
import { User } from "../../types/index.ds";
// Bootstrap
import Button from 'react-bootstrap/Button';
// Icons
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const AllUsers = () => {
  // Loader data
  const users = useLoaderData() as User[];
  // Page data
  const [pageData, setPageData] = useState<User[] | null>(null);
  // Hooks
  const { currentPage, totalPages, currentData, nextPage, prevPage } = usePagination(users, 10);

  useEffect(() => {
    let pageUsers = currentData() as User[];
    setPageData(pageUsers);
  }, [currentPage])

  return (
    <div id="allUsers">
      <h1>Users</h1>
      {pageData && 
        <div id="allUsers-list">
          <UsersList users={pageData}/>
        </div>
      }
      <div id="allUsers-pagination">
        <Button onClick={prevPage} variant="primary"><FaArrowLeftLong/></Button>
        <span>{currentPage}/{totalPages}</span>
        <Button onClick={nextPage} variant="primary"><FaArrowRightLong/></Button>
      </div>
    </div>
  );
};

export default AllUsers;