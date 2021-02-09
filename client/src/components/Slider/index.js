import React from "react";
import Swiper from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Background, Dot, SliderWrapper } from "./styles";
import Image from "./mountain.jpg";

const Slider = () => {
  const config = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
  };
  return (
    <>
      <SliderWrapper>
        <Swiper {...config}>
          <img src="https://picsum.photos/id/237/400/300" alt="zdjecie1" />
          <img src="https://picsum.photos/id/217/400/300" alt="zdjecie2" />
          <img src="https://picsum.photos/id/234/400/300" alt="zdjecie3" />
        </Swiper>
        <Dot />
      </SliderWrapper>
      <Background>
        <img src={Image} alt="cover" />
      </Background>
    </>
  );
};

export default Slider;
