import React from 'react';

import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = ({ children }) => {
  return (
    <>
      <Toolbar />
      <main className={styles.layout__content}>{children}</main>
    </>
  );
};

export default Layout;
