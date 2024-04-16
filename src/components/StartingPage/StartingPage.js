import authCtx from "../../utils/auth-context";
import classes from "./StartingPage.module.css";
import Home from "../../pages/Home";

const StartingPageContent = () => {
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <section className={classes.starting}>
      {!isLoggedIn ? <h1> Please Login in to view Movies!</h1> : <Home />}
    </section>
  );
};

export default StartingPageContent;
