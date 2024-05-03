import React from "react";
import { Link } from "react-router-dom";

const FirebaseSetup = () => {
  return (
    <div className="problems setup">
      <h1>Firebase Setup</h1>
      <p>
        Navigate to <a href="https://firebase.com"> https://firebase.com</a>,
        and click "Get Started".
      </p>
      <img
        src={process.env.PUBLIC_URL + "/getStarted.png"}
        alt="getStarted.png"
      />
      <p>
        This will prompt you to sign in to a google account that you want use
        for this authentication project. After getting signed in and accepting
        the google terms (if any), click on Go to Console.
      </p>
      <img
        src={process.env.PUBLIC_URL + "/goToConsole.png"}
        alt="goToConsole.png"
      />
      <p>From here click on Create a Project.</p>
      <img
        src={process.env.PUBLIC_URL + "/createProject.png"}
        alt="createProject.png"
      />
      <p>In Step 1 of 3, you'll be prompted to name your project.</p>
      <img src={process.env.PUBLIC_URL + "/step1.png"} alt="step1.png" />
      <p>
        Step 2 will ask if you want to enable Google Analytics for your project.
        Let's go ahead and enable it and continue.
      </p>
      <img src={process.env.PUBLIC_URL + "/step2.png"} alt="step2.png" />
      <p>
        For the last step, choose the default account for firebase. Preceed with
        click Create Project.
      </p>
      <img src={process.env.PUBLIC_URL + "/step3.png"} alt="step3.png" />
      <p>
        There you go! You created a project in firebase and now can start using
        their services.
      </p>
      <img
        src={process.env.PUBLIC_URL + "/projectpage.png"}
        alt="projectpage.png"
      />
      <p>
        Now that we have our project, we want to scroll down and select
        Authentication.
      </p>
      <img
        src={process.env.PUBLIC_URL + "/selectAuth.png"}
        alt="selectAuth.png"
      />
      <p>
        This will now active the authentication service and add it to your
        project shortcuts shown in the left taskbar of the page. This page also
        prompts us to "Set up sign-in method".
      </p>
      <img
        src={process.env.PUBLIC_URL + "/authShortcut.png"}
        alt="authShortcut.png"
      />
      <p>
        We are presented with a list of ways to use authentication with many
        different services. But for this walkthrough, we'll stick to basic
        "Email/Password".
      </p>
      <img
        src={process.env.PUBLIC_URL + "/chooseAuthType.png"}
        alt="chooseAuthType.png"
      />
      <p>Now we need to enable the use of Email/Password</p>
      <img
        src={process.env.PUBLIC_URL + "/enableEmail.png"}
        alt="enableEmail.png"
      />
      <p>
        Once we are done making our selected method, we will need a way to
        connect to our Firebase Authentication service. By clicking the "Project
        Overview" gear icon.
      </p>
      <img
        src={process.env.PUBLIC_URL + "/projectSettings.png"}
        alt="projectSettings.png"
      />
      <p>From here we have access to our API KEY</p>
      <img src={process.env.PUBLIC_URL + "/apiKey.png"} alt="apiKey.png" />

      <Link to="/firebaseAPI" className="hover:text-blue-200">
        Firebase API
      </Link>
    </div>
  );
};

export default FirebaseSetup;
