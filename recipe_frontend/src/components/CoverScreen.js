import React from 'react';
import styles from '../styles/CoverScreen.module.css';
import common from '../styles/common.module.css';

/**
 * PUBLIC_INTERFACE
 * Cover screen: App landing with accent styling, title and design credit.
 */
function CoverScreen() {
  return (
    <main className={`${common.screen} ${styles.cover} text-center`} role="main" aria-label="Cover screen">
      <div className={styles.bgRect} />
      <div className={styles.copyright}>2022 ©&nbsp;&nbsp;Jega-Jnr</div>
      <h1 className={styles.title}>FOOD RECIPE</h1>
      <p className={styles.subtitle}>
        Food Recipe Mobile App with Style Guide and Mockup
      </p>
      <button
        className={styles.prototypeLink}
        type="button"
        aria-label="Prototype Link: Click Here"
        onClick={() => window.alert('Prototype Link clicked.')}
      >
        Prototype Link: Click Here
      </button>
      <p className={styles.designedBy}>
        DESIGNED&nbsp;&nbsp;JEGA_JNR
      </p>
    </main>
  );
}

export default CoverScreen;
