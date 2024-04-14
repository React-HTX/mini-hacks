import { useContext } from "react";
import AuthContext from "../../utils/auth-context";
import classes from "./StartingPage.module.css";
import Home from "../../pages/Home";

const StartingPageContent = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <section className={classes.starting}>
      <h1>{isLoggedIn ? <Home /> : "Please Login in to view Movies!"}</h1>
    </section>
  );
};

export default StartingPageContent;
