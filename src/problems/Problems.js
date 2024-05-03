import React from "react";
import { Link } from "react-router-dom";

function Problems() {
  return (
    <div className="problems">
      <Link to="/setup">
        <h1>Firebase Setup</h1>
      </Link>
      <Link to="/firebaseAPI">
        <h1>Firebase API</h1>
      </Link>
      <Link to="/one">
        <h1>Problem One</h1>
      </Link>
      <Link to="/two">
        <h1>ProblemTwo </h1>
      </Link>
    </div>
  );
}

export default Problems;
