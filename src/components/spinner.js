import React from 'react';

import styles from './spinner.module.css';

const Spinner = () => (
  <div className={styles.spinner}>
    <div className={styles.rect1}></div>
    <div className={styles.rect2}></div>
    <div className={styles.rect3}></div>
    <div className={styles.rect4}></div>
    <div className={styles.rect5}></div>
    Загрузка...
  </div>
);
export default Spinner;
