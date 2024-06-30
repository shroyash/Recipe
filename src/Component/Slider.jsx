import React from 'react';
import Slider from 'react-slick';
import { Container } from 'reactstrap';
import '../style/Slider.css';

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  const handlePopUp = () => {
    alert("Enjoy our Recipe")
  }

  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content text-center">
            <h4 className="z-50 text-extrabold">Recipe Finder</h4>
            <h3 className="z-50 text-bold">Find Your Favourite Food Recipe</h3>
            <button className="btn btn-danger mt-4 text-white" onClick={handlePopUp}>
              Enjoy
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
