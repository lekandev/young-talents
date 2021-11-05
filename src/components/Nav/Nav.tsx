
import "./Nav.scss";

const Nav = () => {
    return (
        <div className="nav">
            <h2 className="nav__logo">Young Talents</h2>

            <ul className="nav__links">
                <li className="nav__link">Home</li>
                <li className="nav__link">About</li>
                <li className="nav__link">What we do</li>
                <li className="nav__link">Events</li>
            </ul>

            <a href="/join" className="nav__button">Join</a>
        </div>
    )
}

export default Nav
