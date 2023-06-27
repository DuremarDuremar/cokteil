import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import { Content } from "./style";

const Layout = () => {
  return (
    <Content>
      <Header />
      <Outlet />
    </Content>
  );
};

export default Layout;
