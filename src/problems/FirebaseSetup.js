import React from "react";
import { Link } from "react-router-dom";

const FirebaseSetup = () => {
  return (
    <div className="flex min-h-screen flex-col items-center py-10 px-60">
      <h1 className="text-black text-4xl font-semibold p-10">Firebase Setup</h1>
      <p className="font-semibold py-10 text-2xl w-[30em] text-justify">
        Navigate to {""}
        <a href="https://firebase.com" target="_blank" rel="noreferrer">
          https://firebase.com
        </a>
        , and click "Get Started".
      </p>
      <img
        className="size-10/12"
        src={process.env.PUBLIC_URL + "/getStarted.png"}
        alt="getStarted.png"
      />
      <p className="font-semibold py-10 text-2xl w-[30em] text-justify">
        This will prompt you to sign in to a google account that you want use
        for this authentication project. After getting signed in and accepting
        the google terms (if any), click on Go to Console.
      </p>
      <img
        className="size-10/12"
        src={process.env.PUBLIC_URL + "/goToConsole.png"}
        alt="goToConsole.png"
      />
      <p className="font-semibold py-10 text-2xl w-[30em] text-justify">
        From here click on Create a Project.
      </p>
      <img
        className="size-10/12"
        src={process.env.PUBLIC_URL + "/createProject.png"}
        alt="createProject.png"
      />
      <p className="font-semibold py-10 text-2xl w-[30em] text-justify">
        In Step 1 of 3, you'll be prompted to name your project.
      </p>
      <img
        className="size-10/12"
        src={process.env.PUBLIC_URL + "/step1.png"}
        alt="step1.png"
      />
      <p className="font-semibold py-10 text-2xl w-[30em] text-justify">
        Step 2 will ask if you want to enable Google Analytics for your project.
        Let's go ahead and enable it and continue.
      </p>
      <img
        className="size-10/12"
        src={process.env.PUBLIC_URL + "/step2.png"}
        alt="step2.png"
      />
      <p className="font-semibold py-10 text-2xl w-[30em] text-justify">
        For the last step, choose the default account for firebase. Preceed with
        click Create Project.
      </p>
      <img
        className="size-10/12"
        src={process.env.PUBLIC_URL + "/step3.png"}
        alt="step3.png"
      />
      <p className="font-semibold py-10 text-2xl w-[30em] text-justify">
        There you go! You created a project in firebase and now can start using
        their services.
      </p>
      <img
        className="size-10/12"
        src={process.env.PUBLIC_URL + "/projectpage.png"}
        alt="projectpage.png"
      />
      <p className="font-semibold py-10 text-2xl w-[30em] text-justify">
        Now that we have our project, we want to scroll down and select
        Authentication.
      </p>
      <img
        className="size-10/12"
        src={process.env.PUBLIC_URL + "/selectAuth.png"}
        alt="selectAuth.png"
      />
      <p className="font-semibold py-10 text-2xl w-[30em] text-justify">
        This will now active the authentication service and add it to your
        project shortcuts shown in the left taskbar of the page. This page also
        prompts us to "Set up sign-in method".
      </p>
      <img
        className="size-10/12"
        src={process.env.PUBLIC_URL + "/authShortcut.png"}
        alt="authShortcut.png"
      />
      <p className="font-semibold py-10 text-2xl w-[30em] text-justify">
        We are presented with a list of ways to use authentication with many
        different services. But for this walkthrough, we'll stick to basic
        "Email/Password".
      </p>
      <img
        className="size-10/12"
        src={process.env.PUBLIC_URL + "/chooseAuthType.png"}
        alt="chooseAuthType.png"
      />
      <p className="font-semibold py-10 text-2xl w-[30em] text-justify">
        Now we need to enable the use of Email/Password
      </p>
      <img
        className="size-10/12"
        src={process.env.PUBLIC_URL + "/enableEmail.png"}
        alt="enableEmail.png"
      />
      <p className="flex font-semibold py-10 text-2xl w-[30em] text-justify">
        Once we are done making our selected method, we will need a way to
        connect to our Firebase Authentication service. We will need to get into
        "Project settings" by clicking the "Project Overview" gear icon found at
        the top left.
      </p>
      <img
        className="size-10/12"
        src={process.env.PUBLIC_URL + "/projectSettings.png"}
        alt="projectSettings.png"
      />
      <p className="font-semibold py-10 text-2xl w-[30em] text-justify">
        From here we have access to our API KEY
      </p>
      <img
        className="size-10/12"
        src={process.env.PUBLIC_URL + "/apiKey.png"}
        alt="apiKey.png"
      />

      <Link
        to="/firebaseAPI"
        className=" p-2 text-xl hover:font-bold hover:bg-blue-500 bg-blue-300 text-black border-solid rounded-lg border-4 border-indigo-600 mt-5 "
      >
        Head over to Firebase API
      </Link>
    </div>
  );
};

export default FirebaseSetup;
