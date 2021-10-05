import React from "react";
import { Menu, Image } from "antd";
import { Link } from "react-router-dom";
import useAuth from "../../../common/useAuth";

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
          <Link to="/home">Exit</Link>
        </Menu.Item>
      </Menu>
      {children}
    </>
  );
};

export default AdminHeader;
