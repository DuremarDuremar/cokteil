import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";
import { Content } from "./style";

const Layout = () => {
  return (
    <Content>
      <Header />
      <Outlet />
      <Footer />
    </Content>
  );
};

export default Layout;
