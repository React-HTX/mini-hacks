import React from 'react';

const DemoLinks = ({ handleClick }) => {
  return (
    <>
      <button
        className="demo-link"
        id="example-1"
        onClick={(e) => handleClick(e)}
      >
        Example 1
      </button>
      <button
        className="demo-link"
        id="example-2"
        onClick={(e) => handleClick(e)}
      >
        Example 2
      </button>
      <button
        className="demo-link"
        id="example-3"
        onClick={(e) => handleClick(e)}
      >
        Example 3
      </button>
    </>
  );
};

export default DemoLinks;
