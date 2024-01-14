import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="w-screen h-screen font-poppins overflow-x-hidden">
      <div>{children}</div>
    </div>
  );
};

export default Layout;
