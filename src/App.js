import "./App.css";
import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import SortPage from "./pages/SortPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import SearchPage from "./pages/SearchResults";
import StartingPageContent from "./components/StartingPage/StartingPage";
import AuthContext from "./utils/auth-context";
import AuthPage from "./pages/AuthPage";
import Problems from "./problems/Problems";
import ProblemOne from "./problems/ProblemOne";
import ProblemTwo from "./problems/ProblemTwo";
import FirebaseSetup from "./problems/FirebaseSetup";
import FirebaseAPI from "./problems/FirebaseAPI";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Problems />} />
        <Route path="/setup" element={<FirebaseSetup />} />
        <Route path="/firebaseAPI" element={<FirebaseAPI />} />

        <Route path="/one" element={<ProblemOne />} />
        <Route path="/two" element={<ProblemTwo />} />

        {/* These routes should only be available for non logged in users */}

        {!authCtx.isLoggedIn && (
          <>
            <Route path="/home" element={<StartingPageContent />} />
            <Route path="/auth" element={<AuthPage />} />
          </>
        )}

        {/* These routes should only be available if a user logged in */}
        {authCtx.isLoggedIn && (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/sortPage" element={<SortPage />} />
            <Route path="/movies/:id" element={<MovieDetailsPage />} />
            <Route path="/movies/search" element={<SearchPage />} />
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
