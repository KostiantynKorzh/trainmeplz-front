import React from "react";
import { useLocation } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import Header from "./Header";

const HeaderContainer = ({ children }: any) => {
  const location = useLocation();

  return (
    <>
      {location.pathname.includes("admin") ? (
        <AdminHeader>{children}</AdminHeader>
      ) : (
        <Header>{children}</Header>
      )}
    </>
  );
};

export default HeaderContainer;
