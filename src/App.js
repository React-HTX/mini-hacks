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

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <Navigation />

      <Routes>
        {authCtx.isLoggedIn && (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/sortPage" element={<SortPage />} />
            <Route path="/movies/:id" element={<MovieDetailsPage />} />
            <Route path="/movies/search" element={<SearchPage />} />
            <Route path="*" element={<NotFound />} />
          </>
        )}

        {!authCtx.isLoggedIn && (
          <>
            <Route path="/" element={<StartingPageContent />} />
            <Route path="/auth" element={<AuthPage />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
