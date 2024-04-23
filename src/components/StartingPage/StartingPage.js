import authCtx from "../../utils/auth-context";
import classes from "./StartingPage.module.css";
import Home from "../../pages/Home";

const StartingPageContent = () => {
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <section className={classes.starting}>
      {/* h1 should be display if user is not logged in */}
      {!isLoggedIn ? <h1> Please Login in to view Movies!</h1> : <Home />}
      {/* Only display Home if user is logged in */}
    </section>
  );
};

export default StartingPageContent;
