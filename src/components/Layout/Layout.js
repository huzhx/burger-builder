import React from 'react';

import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <div>Toolbar</div>
      <main className={styles.layout__content}>{children}</main>
    </>
  );
};

export default Layout;
