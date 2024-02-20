import React from 'react';
import ExampleOne from './ExampleOne';
import ExampleTwo from './ExampleTwo';
import Solution from './Solution';

const DemoComps = ({ btnId }) => {
  return (
    <>
      {btnId === 'example-1' ? (
        <ExampleOne key="example-1" />
      ) : btnId === 'example-2' ? (
        <ExampleTwo key="example-2" />
      ) : (
        <Solution key="solution" />
      )}
    </>
  );
};

export default DemoComps;
