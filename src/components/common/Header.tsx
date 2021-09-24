import React from "react";
import { Menu, Image } from "antd";
import { Link } from "react-router-dom";

const Header = ({ children }: any) => {
  const styles = {
    item: {
      margin: "auto",
    },
  };

  return (
    <>
      <Menu
        theme="dark"
        mode="horizontal"
        // defaultSelectedKeys={["2"]}
      >
        <Menu.Item className="logo">
          <Link to="/">
            <img src="/favicon.png" style={{ borderRadius: "60%" }} />
          </Link>
        </Menu.Item>
        <Menu.Item style={styles.item}>
          <Link to="/train">Train</Link>
        </Menu.Item>
        <Menu.Item style={styles.item}>
          <Link to="/test">Test</Link>
        </Menu.Item>
        <Menu.Item style={styles.item}>
          <Link to="/algorithms">Algorithms</Link>
        </Menu.Item>
        <Menu.Item style={styles.item}>
          <Link to="/about">About</Link>
        </Menu.Item>
      </Menu>
      {children}
    </>
  );
};

export default Header;
