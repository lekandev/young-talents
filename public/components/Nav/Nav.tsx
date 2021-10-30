/* eslint-disable @next/next/no-html-link-for-pages */
import styles from "./Nav.module.scss";

const Nav = () => {
    return (
        <div className={styles.nav}>
            <h2 className={styles.nav__logo}>Young Talents</h2>

            <ul className={styles.nav__links}>
                <li className={styles.nav__link}>Home</li>
                <li className={styles.nav__link}>About</li>
                <li className={styles.nav__link}>What we do</li>
                <li className={styles.nav__link}>Events</li>
            </ul>

            <a href="/join" className={styles.nav__button}>Join</a>
        </div>
    )
}

export default Nav
