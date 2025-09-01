import React, { useState } from 'react';
import styles from '../styles/FilterScreen.module.css';
import common from '../styles/common.module.css';

/**
 * PUBLIC_INTERFACE
 * Filter Screen: select criteria, chips styled and interactive, no backend yet.
 */
function FilterScreen() {
  // For demonstration, remember selected chip
  const [time, setTime] = useState('Newest');
  const [rate, setRate] = useState(4);
  const [category, setCategory] = useState('Local Dish');

  return (
    <main className={`${common.screen} ${styles.filter}`} role="main" aria-label="Filter screen">
      <h1 className={styles.title}>Filter Search</h1>
      <section className={styles.section}>
        <div className={styles.group}>
          <span className={styles.label}>Time</span>
          <div className={styles.chips}>
            {['All','Newest','Oldest','Popularity'].map(option => (
              <button
                key={option}
                type="button"
                className={`${styles.chip} ${time === option ? styles.chipFilled : styles.chipOutline}`}
                onClick={() => setTime(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.group}>
          <span className={styles.label}>Rate</span>
          <div className={styles.chips}>
            {[5,4,3,2,1].map(opt => (
              <button
                key={opt}
                type="button"
                className={`${styles.chip} ${rate === opt ? styles.chipFilled : styles.chipOutline}`}
                onClick={() => setRate(opt)}
              >
                {opt}
                <span className={styles.star} role="img" aria-label="star">
                  {opt >=4 ? '⭐' : ''}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className={styles.group}>
          <span className={styles.label}>Category</span>
          <div className={styles.chips}>
            {['All','Cereal','Vegetables','Dinner','Chinese','Local Dish','Fruit','BreakFast','Lunch','Spanish'].map(opt => (
              <button
                key={opt}
                type="button"
                className={`${styles.chip} ${category === opt ? styles.chipFilled : styles.chipOutline}`}
                onClick={() => setCategory(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </section>
      <button className={styles.primaryBtn} type="button" onClick={() => alert('Filter applied (mock)!')}>
        <span>Filter</span>
      </button>
    </main>
  );
}

export default FilterScreen;
