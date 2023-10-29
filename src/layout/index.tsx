import React, { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Start } from "../components";
import { Content } from "./style";

const Layout: FC = () => {
  return (
    <Content>
      <Start />
      <div className="noscroll">
        <Outlet />
        <Footer />
      </div>
    </Content>
  );
};

export default Layout;
