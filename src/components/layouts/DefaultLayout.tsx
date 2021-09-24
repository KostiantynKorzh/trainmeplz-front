import React from "react";

const DefaultLayout = ({ children }: any): JSX.Element => {
  return (
    <>
      <div className="jumbotron">{children}</div>
    </>
  );
};

export default DefaultLayout;
