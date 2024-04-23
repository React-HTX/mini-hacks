import React from "react";
import { Link } from "react-router-dom";
import ProblemOne from "./ProblemOne";
import ProblemTwo from "./ProblemTwo";

function Problems() {
  return (
    <>
      <Link to="/one">
        <h1>Problem One</h1>
      </Link>
      <Link to="/two">
        <h1>ProblemTwo </h1>;
      </Link>
    </>
  );
}

export default Problems;
