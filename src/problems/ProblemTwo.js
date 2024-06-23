import React from "react";

const ProblemTwo = () => {
  return (
    <div className="flex min-h-screen flex-col items-center py-10 px-60">
      <h1 className="text-black text-4xl font-semibold p-10">Problem Two</h1>
      <div>
        <p className=" py-5 text-2xl w-[30em] text-justify">
          The issue here is that the routes are unprotectd. Any visitor can
          manually type in our site's URL routes and view any of our pages. Add
          "/home", "/sortPage", "/movies/800158" to the end of the browser URL
          for example.
        </p>
        <p className=" py-5 text-2xl w-[30em] text-justify">
          There is also another issue with "StartPage" component. Currently, it
          allows users to see all movies without logging in.
        </p>
        <h2 className="text-black text-4xl font-semibold py-2">Objective:</h2>
        <ul>
          <li className="font-semibold py-2 text-xl w-[30em] text-justify">
            Fix this problem in the "App" component.
          </li>
          <li className="font-semibold py-2 text-xl w-[30em] text-justify">
            Fix the issue in the "StartPage" component.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProblemTwo;
