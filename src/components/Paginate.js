import React from 'react';

function Pagination({ totalPages, currentPage, paginate, hasPrevious, hasNext, onPrevious, onNext }) {
  return (
    <ul className="pagination">
      <li style={{ display: 'inline-block', textAlign: 'center', margin: '1rem 1rem' }}>
        <button
          onClick={onPrevious}
          className={hasPrevious ? 'active' : 'disabled'}
          disabled={!hasPrevious}
        >
          Previous
        </button>
      </li>
      <li style={{ display: 'inline-block', textAlign: 'center', margin: '1rem 1rem' }}>
        <button
          onClick={onNext}
          className={hasNext ? 'active' : 'disabled'}
          disabled={!hasNext}
        >
          Next
        </button>
      </li>
    </ul>
  );
}

export default Pagination;
