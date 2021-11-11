import { Link } from "react-router-dom";

import "./Nav.scss";

const Nav = () => {
  return (
    <div className="nav">
      <h2 className="nav__logo">The Young Talents</h2>

      <ul className="nav__links">
        <li className="nav__link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav__link">
          <Link to="/">About</Link>
        </li>
        <li className="nav__link">
          <Link to="/gallery">Gallery</Link>
        </li>
        <li className="nav__link">
          <Link to="/events">Events</Link>
        </li>
      </ul>

      <Link to="/join" className="nav__button">
        Join
      </Link>
    </div>
  );
};

export default Nav;
