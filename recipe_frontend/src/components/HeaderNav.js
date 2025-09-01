import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/HeaderNav.module.css';

/**
 * PUBLIC_INTERFACE
 * Header navigation for routing between app screens
 */
function HeaderNav() {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>🍽️ Food Recipes</NavLink>
      <div className={styles.links}>
        <NavLink to="/" className={styles.link}>Home</NavLink>
        <NavLink to="/signup" className={styles.link}>Sign Up</NavLink>
        <NavLink to="/filter" className={styles.link}>Filter</NavLink>
      </div>
    </nav>
  );
}

export default HeaderNav;
