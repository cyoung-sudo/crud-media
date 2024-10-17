import { useState, useEffect } from 'react';

interface User {
  _id: string;
  username: string;
  password: string;
  createdAt: Date;
};

interface Post {
  _id: string,
  userId: string,
  username: string,
  title: string,
  text: string,
  createdAt: Date
};

const usePagination = (data: User[] | Post[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // Calc total pages
  useEffect(() => {
    setTotalPages(Math.ceil(data.length / itemsPerPage));
  }, [data, itemsPerPage]);

  // Retrieve data for current page
  const currentData = () => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return {
    currentPage,
    totalPages,
    currentData,
    nextPage,
    prevPage
  };
};

export default usePagination;