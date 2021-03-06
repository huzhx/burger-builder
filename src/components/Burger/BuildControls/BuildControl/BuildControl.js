import React from 'react';

import styles from './BuildControl.module.css';

const BuildControl = ({ label, onAddIngredients }) => {
  return (
    <div className={styles.build_control}>
      <div className={styles.build_control__label}>{label}</div>
      <button className={[styles['build_control__button'], styles['build_control__button--less']].join(' ')}>
        less
      </button>
      <button
        className={[styles['build_control__button'], styles['build_control__button--more']].join(' ')}
        onClick={onAddIngredients}
      >
        more
      </button>
    </div>
  );
};

export default BuildControl;
