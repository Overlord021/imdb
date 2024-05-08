import React from "react";
import Slider from "./Slider/Slider";
import Feature from "./Feature/Feature";
import Watchlist from "./Watchlist/Watchlist";
import TopImdb from "../Management/TopImdb/TopImdb";
import Fav from "../Management/Fav/Fav";
import MoreToWatch from "./MoreToWatch/MoreToWatch";
import Exclusive from "./Exclusive/Exclusive";
import Explore from "./Explore/Explore";

const MainSection = () => {
  return (
    <>
        <Slider />
        <Feature/>
        <Watchlist/>
        <TopImdb/>
        <Fav/>
        <MoreToWatch/>
        <Exclusive/>
        <Explore/>
    </>
  );
};

export default MainSection;
