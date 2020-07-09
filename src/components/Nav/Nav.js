import React from "react";
import { Link } from "react-router-dom";

import styles from "./Nav.module.css";

export default function ({ showNav, toggleNav }) {
  return (
    <nav className={`${styles.nav} ${showNav ? styles.showNav : ""}`}>
      <ul className={styles.linkList}>
        <li className={styles.navLinkItem}>
          <Link to="/resources" className={styles.navLink} onClick={toggleNav}>
            Resources
          </Link>
        </li>
        <li className={styles.navLinkItem}>
          <Link to="/events" className={styles.navLink} onClick={toggleNav}>
            Upcoming Events
          </Link>
        </li>
        <li className={styles.navLinkItem}>
          <Link
            to="/organization"
            className={styles.navLink}
            onClick={toggleNav}
          >
            About
          </Link>
        </li>
        <li className={styles.navLinkItem}>
          <a
            href="https://juniordevstruggleblog.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navLink}
            onClick={toggleNav}
          >
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
}