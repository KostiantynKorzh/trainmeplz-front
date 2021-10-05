import React from "react";
import { Menu, Image } from "antd";
import { Link } from "react-router-dom";
import useAuth from "../../../common/useAuth";
import AuthService from "../../../services/AuthService";

const AdminHeader = ({ children }: any) => {
  const styles = {
    item: {
      margin: "auto",
    },
  };

  useAuth();

  return (
    <>
      <Menu
        theme="dark"
        mode="horizontal"
        // defaultSelectedKeys={["2"]}
      >
        <Menu.Item className="logo">
          <Link to="/admin">
            <img src="/favicon.png" style={{ borderRadius: "60%" }} />
          </Link>
        </Menu.Item>
        <Menu.Item style={styles.item}>
          <Link to="/admin/articles">Articles</Link>
        </Menu.Item>
        <Menu.Item style={styles.item}>
          <Link to="/home">To user pages</Link>
        </Menu.Item>
        <Menu.Item style={styles.item} onClick={() => AuthService.logout()}>
          <Link to="/home">Logout</Link>
        </Menu.Item>
      </Menu>
      {children}
    </>
  );
};

export default AdminHeader;
