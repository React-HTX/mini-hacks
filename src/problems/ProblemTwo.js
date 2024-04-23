import React from "react";

const ProblemTwo = () => {
  return (
    <div className="problems">
      <h1>Problem Two</h1>
      <div>
        <p>
          The issue here is that the routes are unprotectd. Any visitor can
          manually type in our site's URL routes and view any of our pages. Add
          "/home", "/sortPage", "/movies/800158" to the end of the browser URL
          for example.
        </p>
        <p>
          There is also another issue with "StartPage" component. Currently, it
          allows users to see all movies without logging in.
        </p>
        <h2>Objective:</h2>
        <ul>
          <li>Fix this problem in the "App" component.</li>
          <li>Fix the issue in the "StartPage" component.</li>
        </ul>
      </div>
    </div>
  );
};

export default ProblemTwo;
