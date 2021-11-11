import { Link } from "react-router-dom";

import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__title">The Young Talent</h1>

        <p className="hero__tagline">
          Nurturing and developing <br /> the youths through skills acquisition
          and<br /> talent promotion.
        </p>

        <Link to="/events" className="hero__button">
          View upcoming events
        </Link>
      </div>

      <div className="hero__img">
        <div className="hero__img--text">{/* Talent equal skill */}</div>
      </div>
    </div>
  );
};

export default Hero;
