import React from "react";
import HomeSection from "../components/Sections/Home";
import SectionAlbums from "../components/Sections/Album";
import About from "../components/Sections/About/";
import Contact from "../components/Sections/Contact/";

const Home = () => {
  return (
    <>
      <HomeSection />
      <SectionAlbums />
      <About />
      <Contact />
    </>
  );
};

export default Home;
