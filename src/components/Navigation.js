import React, { useContext, useState } from "react";
import AuthContext from "../utils/auth-context";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = () => {
    authCtx.logout();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim()) {
      navigate(`/movies/search?query=${searchText.trim()}`);
    }
  };

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          {!isLoggedIn ? "Problems" : "Movie Listings App"}
        </Link>
        <ul className="flex flex-col text-white md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          {/* This nav link should only be available for non logged in users */}
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {/* These nav links should only be available if a user logged in */}
          {isLoggedIn && (
            <>
              <li>
                <Link to="/home" className="hover:text-blue-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sortPage" className="hover:text-blue-200">
                  Sort Page
                </Link>
              </li>
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            </>
          )}
        </ul>

        <form onSubmit={handleSubmit}>
          <div className="relative flex-wrap items-center">
            <input
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              placeholder="Search"
              className="bg-gray-200 text-black p-2 pl-8 rounded-full focus:outline-none focus:ring focus:border-blue-300"
            />
            <button
              type="submit"
              className="bg-blue-700 text-white px-4 py-2 ml-4 rounded-full hover:bg-blue-600"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navigation;
