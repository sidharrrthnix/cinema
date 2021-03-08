import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Paginate.scss';
const Paginate = (props) => {
  const { currentPage, totalPage, paginate } = props;
  const [page, setPage] = useState();
  const [totalPageNumber, setTotalPageNumber] = useState();

  useEffect(() => {
    setPage(currentPage);
    setTotalPageNumber(totalPage);
  }, [currentPage, totalPage]);
  return (
    <>
      <span className="pageCount">
        {page} - {totalPage}{' '}
      </span>
      <button className={page > 1 ? 'paginate-button' : 'paginate-button disable'} onClick={() => paginate('prev')}>
        Prev
      </button>
      <button className={page === totalPageNumber ? 'paginate-button disable' : 'paginate-button'} onClick={() => paginate('next')}>
        Next
      </button>
    </>
  );
};

Paginate.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPage: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired
};

export default Paginate;
