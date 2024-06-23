import React from "react";
import { Link } from "react-router-dom";

function Problems() {
  return (
    <div className="text-black text-4xl font-semibold flex min-h-screen flex-col items-center p-10">
      <Link to="/setup" className="p-10">
        <h1>Firebase Setup</h1>
      </Link>
      <Link to="/firebaseAPI" className="p-10">
        <h1>Firebase API</h1>
      </Link>
      <Link to="/one" className="p-10">
        <h1>Problem One</h1>
      </Link>
      <Link to="/two" className="p-10">
        <h1>ProblemTwo </h1>
      </Link>
    </div>
  );
}

export default Problems;
