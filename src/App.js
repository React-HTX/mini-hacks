import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import NotFound from './notFound'
import Home from './Home';
import Navigation from './Navigation';
import SortPage from './sortPage';
import MovieDetailsPage from './movieDetailsPage';
import SearchPage from './searchPage';
import Counter from './Counter';


function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sortPage" element={<SortPage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
        <Route path="/movies/search" element={<SearchPage />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="*" element={<NotFound />} />
        {/* Define more routes here */}
      </Routes>
    </Router>
  );
}


export default App;

