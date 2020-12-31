import React, { useState } from 'react';

import styles from './NavigationItem.module.css';

const NavigationItem = ({ link, children, active }) => {
  return (
    <li className={styles.navigation_item}>
      <a
        className={
          active
            ? [styles.navigation_item__a, styles['navigation_item__a--active']].join(' ')
            : styles.navigation_item__a
        }
        href={link}
      >
        {children}
      </a>
    </li>
  );
};

export default NavigationItem;
