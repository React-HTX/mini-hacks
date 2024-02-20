import React, { useState } from 'react';
import DemoLinks from './demo/DemoLinks';
import DemoComps from './demo/DemoComps';

export default function FiveExplained() {
  const [id, setId] = useState('example-1');

  function handleClick(e) {
    if (e.target.id === id) {
      return;
    } else {
      setId(e.target.id);
    }
  }
  return (
    <div className="section">
      <div className="section-center">
        <div className="demo-links">
          <DemoLinks handleClick={handleClick} />
        </div>
        <div className="demo-container">
          <DemoComps btnId={id} />
        </div>
      </div>
    </div>
  );
}
