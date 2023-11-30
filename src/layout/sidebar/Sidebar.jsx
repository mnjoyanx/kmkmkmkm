import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LogoutOutlined } from "@ant-design/icons";
import logo from "../../assets/images/logo.png";

import { Layout, Menu } from "antd";

import "./_Sidebar.scss";

export default function Sidebar({ collapsed }) {
  const navigate = useNavigate();

  const location = useLocation();

  const [current, setCurrent] = useState("");

  const onClickItem = (e) => {
    setCurrent(e.key);
    navigate(e.key);
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    // how to change git remote
    // git remote -v
    // git remote set-url origin
    setCurrent(location.pathname);
  }, []);

  return (
    <Layout.Sider
      id="sidebar"
      collapsible={null}
      collapsed={collapsed}
      collapsedWidth={80}
      width={250}
    >
      svsdv dvasvsdvsdv sdvssss
      <div className="sidebar-logo-section">
        <img src={logo} alt="logo" />
        test
      </div>
      <div className="sidebar-menu">
        <Menu
          mode="inline"
          selectedKeys={current}
          onClick={onClickItem}
          items={[
            {
              key: "/dashboard/table_2",
              label: "Table 2",
            },
          ]}
        />

        <div className="logout-item">
          <Menu
            mode="inline"
            selectedKeys={current}
            onClick={logoutHandler}
            items={[
              {
                key: "/dashboard/logout",
                label: "Logout",
                icon: <LogoutOutlined />,
              },
            ]}
          />
        </div>
      </div>
    </Layout.Sider>
  );
}
