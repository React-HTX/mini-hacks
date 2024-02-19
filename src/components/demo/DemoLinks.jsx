import React from 'react';

const DemoLinks = ({ handleClick }) => {
  return (
    <div className="demo-header">
      <button className="btn" id="two-counters" onClick={(e) => handleClick(e)}>
        Demo Link 1
      </button>
      <button className="btn" id="demo-two" onClick={(e) => handleClick(e)}>
        Demo Link 2
      </button>
    </div>
  );
};

export default DemoLinks;
