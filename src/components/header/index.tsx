import React from "react";
import { ReactComponent as SvgBurger } from "../../assets/menu.svg";
import { ReactComponent as SvgSearch } from "../../assets/search.svg";
import { ReactComponent as SvgAvatar } from "../../assets/avatar.svg";
import { ReactComponent as SvgShop } from "../../assets/shopping.svg";
import { Burger, Content, Avatar, Search, Shop } from "./style";

const Header = () => {
  return (
    <Content>
      <Burger>
        <SvgBurger />
      </Burger>
      <Search>
        <SvgSearch />
        <input type="text" placeholder="Поиск" />
      </Search>
      <Avatar>
        <SvgAvatar />
      </Avatar>
      <Shop>
        <SvgShop />
      </Shop>
    </Content>
  );
};

export default Header;
