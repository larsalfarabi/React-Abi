import { useState } from "react";

function usePage() {
  const [page, setPage] = useState(10);
  const [pageSize, setPageSize] = useState(1);
  const handlePageSize = (e) => {
    setPageSize(e.target.value);
  };
  const handlePage = (e) => {
    setPage(e.target.value);
  };
  return { page, setPage, pageSize, setPageSize, handlePage, handlePageSize };
}

export default usePage;
