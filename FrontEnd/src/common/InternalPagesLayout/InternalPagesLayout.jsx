import React from "react";
import "./InternalPagesLayout.scss";
const InternalPagesLayout = ({ children }) => {
  return (
    <div>
      <div className="container">
        <div className="wrapper">{children}</div>
      </div>
    </div>
  );
};

export default InternalPagesLayout;
