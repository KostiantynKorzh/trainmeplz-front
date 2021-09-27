import React from "react";
import AdminHeader from "./AdminHeader";
import Header from "./Header";

const HeaderLayout = ({ children }: any) => {
  return (
    <>
      {window.location.href.includes("admin") ? (
        <AdminHeader>{children}</AdminHeader>
      ) : (
        <Header>{children}</Header>
      )}
    </>
  );
};

export default HeaderLayout;
