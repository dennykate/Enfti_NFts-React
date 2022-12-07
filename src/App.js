import React from "react";
import {
  BidsAndNews,
  Collectors,
  CreateAndSell,
  Explore,
  Footer,
  Header,
  Hero,
  Sponsers,
  Trending,
} from "./components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <Trending />
      <Explore />
      <Collectors />
      <CreateAndSell />
      <BidsAndNews />
      <Sponsers />
      <Footer />
    </div>
  );
};

export default App;
