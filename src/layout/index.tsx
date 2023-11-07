import React, { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Start } from "../components";
import { Content } from "./style";

interface IProps {
  res900: boolean;
}

const Layout: FC<IProps> = ({ res900 }) => {
  return (
    <Content>
      <Start />
      <div className="scroll">
        <Outlet />
        <Footer />
      </div>
    </Content>
  );
};

export default Layout;
