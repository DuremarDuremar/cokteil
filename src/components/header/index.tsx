import React, { FC } from "react";
import Nav from "../nav";
import Profile from "../profile";
import { ReactComponent as SvgBurger } from "../../assets/menu.svg";
import { ReactComponent as SvgAvatar } from "../../assets/avatar.svg";
import { ReactComponent as SvgShop } from "../../assets/shopping.svg";
import { Burger, Content, Avatar, Shop, AvatarLink } from "./style";

interface IProps {
  burger: boolean;
  setBurger: React.Dispatch<React.SetStateAction<boolean>>;
  prof: boolean;
  setProf: React.Dispatch<React.SetStateAction<boolean>>;
  search: JSX.Element | null;
  res900: boolean;
}

const Header: FC<IProps> = ({
  burger,
  setBurger,
  prof,
  setProf,
  search,
  res900,
}) => {
  return (
    <Content>
      <Burger>
        {burger && res900 ? (
          <Nav setBurger={setBurger} />
        ) : (
          <SvgBurger onClick={() => setBurger(true)} />
        )}
      </Burger>
      {search}
      <Avatar
        onClick={(e) => {
          setProf(!prof);
          e.stopPropagation();
        }}
      >
        {res900 ? (
          <SvgAvatar />
        ) : (
          <AvatarLink to="/log">
            <SvgAvatar />
          </AvatarLink>
        )}
      </Avatar>
      <Shop>
        <SvgShop />
      </Shop>
      {prof && res900 && <Profile />}
    </Content>
  );
};

export default Header;
