import React from 'react';
import ExampleOne from './ExampleOne';
import Example from './Example';

const DemoComps = ({ btnId }) => {
  return (
    <>
      {btnId === 'example-1' ? (
        <ExampleOne key="example-1" />
      ) : btnId === 'example-2' ? (
        <Example key="example-2" />
      ) : (
        <ExampleOne />
      )}
    </>
  );
};

export default DemoComps;
