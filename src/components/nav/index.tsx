import React, { FC } from "react";
import { Content } from "./style";

interface IProps {
  setBurger: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav: FC<IProps> = ({ setBurger }) => {
  return (
    <Content>
      <div onClick={() => setBurger(false)}>123</div>Nav
    </Content>
  );
};

export default Nav;
