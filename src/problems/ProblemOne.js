import React from "react";

const ProblemOne = () => {
  return (
    <div className="flex min-h-screen flex-col items-center py-10 px-60">
      <h1 className="text-black text-4xl font-semibold p-10">Problem One</h1>
      <div>
        <p className="font-semibold py-5 text-2xl w-[30em] text-justify">
          The issue here is that the navigation should not be displaying the
          following links:
        </p>
        <ul className=" m-5 ">
          <li className="text-2xl p-1">Login</li>
          <li className="text-2xl p-1">Home</li>
          <li className="text-2xl p-1">Sort Page</li>
          <li className="text-2xl p-1">Logout</li>
        </ul>
        <h2 className="text-black text-4xl font-semibold py-2">Objective:</h2>
        <p className="font-semibold py-2 text-xl w-[30em] text-justify">
          Fix this problem in the "Navigation" component. "Login" should be the
          only link displayed when a user is logged out.
        </p>
      </div>
    </div>
  );
};

export default ProblemOne;
