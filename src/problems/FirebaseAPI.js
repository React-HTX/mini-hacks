import React from "react";

const FirebaseAPI = () => {
  return (
    <div className="problems ">
      <h1>Firebase API</h1>
      <div>
        <div>
          <p>
            This is will pretty straight forward. All we need to do with your
            API Key is place it in the ".env" file. Open your ".env" and
            replace,
            <span> "add-your-web-api-key-here" </span>
            with your API Key.
          </p>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + "/env.png"} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FirebaseAPI;
