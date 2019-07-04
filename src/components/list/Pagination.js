import React from 'react';
import PropTypes from "prop-types";
import "./Pagination.css";


const Pagination = (props) => {
    const {page, totalPages, handlePaginationclick} = props;
    return(
        <div className="Pagination">
        <button 
          className="Pagination-button"
          onClick={handlePaginationclick.bind (this, "pref")}
          disabled={ page <= 1 }
       >
    
            &larr; 
        </button>
        <span className= "Paginatin-info"> 
        page <b>{page}</b> of <b>{totalPages}</b>
        </span>
        <button
         className="Pagination-button"
         onClick={() => handlePaginationclick ("next")}
         disabled={ page >= totalPages }
         >
            &rarr; 
        </button>
        </div>
    )
}
Pagination.propTypes={
    totalPages:PropTypes.number.isRequired,
    page:PropTypes.number.isRequired,
    handlePaginationclick:PropTypes.func.isRequired
}
export default Pagination;