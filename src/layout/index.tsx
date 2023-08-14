import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";
import { Content } from "./style";

interface IProps {
  burger: boolean;
  setBurger: React.Dispatch<React.SetStateAction<boolean>>;
}

const Layout: FC<IProps> = ({ burger, setBurger }) => {
  return (
    <Content>
      <Header burger={burger} setBurger={setBurger} />
      <Outlet />
      <Footer />
    </Content>
  );
};

export default Layout;
