import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "../../Slider";
import { HomePageWrapper, TextWrapper } from "../../Wrappers";
import { HomepageTitle } from "../../Titles";

const HomeSection = () => {
  return (
    <HomePageWrapper id="home">
      <TextWrapper top="150px" left="10%">
        <HomepageTitle text="Hey i`m" size="2.25rem" />
        <HomepageTitle weight="bold" text="Photgrapher" size="5rem" />
        <HomepageTitle weight="bold" text="Traveler" size="5rem" />
        <HomepageTitle weight="bold" text="Artist" size="5rem" />
      </TextWrapper>
      <Slider />
    </HomePageWrapper>
  );
};

export default HomeSection;
