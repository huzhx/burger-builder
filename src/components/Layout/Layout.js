import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <div>Toolbar</div>
      <main>{children}</main>
    </>
  );
};

export default Layout;
