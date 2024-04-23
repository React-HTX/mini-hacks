import React from "react";

const ProblemOne = () => {
  return (
    <div className="problems">
      <h1>Problem One</h1>
      <div>
        <p>
          The issue here is that the navigation should not be displaying the
          following links:
        </p>
        <ul>
          <li>Login</li>
          <li>Home</li>
          <li>Sort Page</li>
          <li>Logout</li>
        </ul>
        <h2>Objective:</h2>
        <ul>
          <li>
            Fix this problem in the "Navigation" component. "Login" should be
            the only link displayed when a user is logged out.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProblemOne;
