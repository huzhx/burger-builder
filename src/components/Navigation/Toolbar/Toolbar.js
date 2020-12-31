import React from 'react';

import styles from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = (props) => (
  <header className={styles.toolbar}>
    <div>MENU</div>
    <div>LOGO</div>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
