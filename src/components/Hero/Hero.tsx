import React from "react";

import "./Hero.scss"

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Young Talents</h1>

        <p className="hero__tagline">
          Nurturing and development of youths through skill development and
          talent showcase
        </p>

        <a href="#" className="hero__button">More</a>
      </div>

      <div className="hero__img">
          <div className="hero__img--text">
              {/* Talent equal skill */}
          </div>
      </div>
    </div>
  );
};

export default Hero;
