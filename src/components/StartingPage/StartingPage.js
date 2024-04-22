import authCtx from "../../utils/auth-context";
import classes from "./StartingPage.module.css";
import Home from "../../pages/Home";

const StartingPageContent = () => {
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <section className={classes.starting}>
      {/* h1 should be display if user is not logged in */}
      <h1> Please Login in to view Movies!</h1>

      {/* Only display Home if user is logged in */}
      <Home />
    </section>
  );
};

export default StartingPageContent;
