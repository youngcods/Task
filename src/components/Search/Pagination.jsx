import React from "react";
import "./pagination.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(
      <button
        key={i}
        className={currentPage === i ? "active" : ""}
        onClick={() => onPageChange(i)}
      >
        {i}
      </button>
    );
  }

  return <div className="pagination">{pageNumbers}</div>;
};

export default Pagination;
