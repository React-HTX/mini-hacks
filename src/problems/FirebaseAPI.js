import React from "react";

const FirebaseAPI = () => {
  return (
    <div className="flex min-h-screen flex-col items-center py-10 px-60">
      <h1 className="text-black text-4xl font-semibold p-10">Firebase API</h1>
      <p className="font-semibold py-10 text-2xl w-[30em] text-justify">
        This is will pretty straight forward. All we need to do with your API
        Key is place it in the ".env" file. Open your ".env" and replace,
        <span> "add-your-web-api-key-here" </span>
        with your API Key.
      </p>
      <img src={process.env.PUBLIC_URL + "/env.png"} alt="" />
    </div>
  );
};

export default FirebaseAPI;
