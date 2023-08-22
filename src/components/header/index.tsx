import React, { FC, useState } from "react";
import Nav from "../nav";
import Profile from "../profile";
import { ReactComponent as SvgBurger } from "../../assets/menu.svg";
import { ReactComponent as SvgSearch } from "../../assets/search.svg";
import { ReactComponent as SvgAvatar } from "../../assets/avatar.svg";
import { ReactComponent as SvgShop } from "../../assets/shopping.svg";
import { Burger, Content, Avatar, Search, Shop } from "./style";

interface IProps {
  burger: boolean;
  setBurger: React.Dispatch<React.SetStateAction<boolean>>;
  prof: boolean;
  setProf: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: FC<IProps> = ({ burger, setBurger, prof, setProf }) => {
  return (
    <Content>
      <Burger>
        {burger ? (
          <Nav setBurger={setBurger} />
        ) : (
          <SvgBurger onClick={() => setBurger(true)} />
        )}
      </Burger>
      <Search>
        <SvgSearch />
        <input type="text" placeholder="Поиск" />
      </Search>
      <Avatar
        onClick={(e) => {
          setProf(!prof);
          e.stopPropagation();
        }}
      >
        <SvgAvatar />
      </Avatar>
      <Shop>
        <SvgShop />
      </Shop>
      {prof && <Profile />}
    </Content>
  );
};

export default Header;
