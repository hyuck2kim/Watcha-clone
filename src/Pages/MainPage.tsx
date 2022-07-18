import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import LatestMovieSection from "../features/movie/latest";
import NowPlayingSection from "../features/movie/nowPlaying";

const Test = () => {
  return (
    <div>
      <h1>1</h1>
    </div>
  );
};

const MainPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Test />
      <LatestMovieSection />
      <Footer />
    </div>
  );
};

export default MainPage;
