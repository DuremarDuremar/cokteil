import React, { FC } from "react";
import logo from "../../assets/logo.png";
import { Content, List } from "./style";

interface IProps {
  setBurger: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav: FC<IProps> = ({ setBurger }) => {
  return (
    <Content>
      <List>
        <div onClick={() => setBurger(false)}>
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <li>Женщинам </li>
          <li>Мужчинам</li>
          <li>Детям</li>
          <li>Обувь</li>
          <li>Игрушки</li>
          <li>Аксессуары</li>
          <li>Большие размеры</li>
          <li>Дополнительно</li>
          <li>Акции</li>
        </ul>
      </List>
    </Content>
  );
};

export default Nav;
