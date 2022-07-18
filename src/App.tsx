import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import MovieDetail from "./Pages/MovieDetail";
import TvDetail from "./Pages/TvDetail";
import TvPage from "./Pages/TvPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/tv/:id" element={<TvDetail />} />
          <Route path="/tv" element={<TvPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
