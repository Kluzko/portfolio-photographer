import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "../components/Slider";
import { HomePageWrapper, TextWrapper } from "../components/Wrappers";
import { HomepageTitle } from "../components/Titles";
import SectionAlbums from "../components/SectionAlbum";
const Home = () => {
  return (
    <>
      <HomePageWrapper>
        <TextWrapper top="150px" left="10%">
          <HomepageTitle text="Hey i`m" size="2.25rem" />
          <HomepageTitle weight="bold" text="Photgrapher" size="5rem" />
          <HomepageTitle weight="bold" text="Traveler" size="5rem" />
          <HomepageTitle weight="bold" text="Artist" size="5rem" />
        </TextWrapper>
        <Slider />
      </HomePageWrapper>
      <SectionAlbums />
    </>
  );
};

export default Home;
