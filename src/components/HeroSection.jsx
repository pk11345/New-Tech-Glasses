import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeroSection.css"; // 👈 for custom 3D animation

const images = [
  "/glass1.jpeg",
  "/glass2.jpeg",
  "/glass3.jpeg",
];

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <section className="relative h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800
     text-white overflow-hidden ">
      {/* Carousel */}
      <div className="relative z-10 flex  justify-center items-center h-full text-center px-4">
        <div className="w-3/4 md:w-1/2 perspective">
          <Slider {...settings}>
            {images.map((src, index) => (
              <div key={index}>
                <img
                  src={src}
                  alt={`slide-${index}`}
                  className="rounded-2xl shadow-xl transform-style-3d animate-rotate3D mx-auto"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Text */}
        <div className="">
        <h2 className="mt-10 text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
          New Tech Glasses
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl">
          Get your decorative glasses and mirrors with a futuristic touch.
        </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
