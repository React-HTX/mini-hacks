import React, { useState } from 'react';
import DemoLinks from './demo/DemoLinks';
import DemoComps from './demo/DemoComps';

export default function FiveExplained() {
  const [id, setId] = useState('two-counters');

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
        <DemoLinks handleClick={handleClick} />
        <DemoComps btnId={id} />
      </div>
    </div>
  );
}
