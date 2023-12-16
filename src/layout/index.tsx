import React, { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Start } from "../components";
import { Content } from "./style";

interface IProps {
  res900: boolean;
  res1360: boolean;
}

const Layout: FC<IProps> = ({ res900, res1360 }) => {
  return (
    <Content>
      <Start res900={res900} />
      <div className="scroll">
        <Outlet />
        <Footer res1360={res1360} />
      </div>
    </Content>
  );
};

export default Layout;
