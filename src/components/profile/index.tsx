import React from "react";
import { Cart, Content, Entry, Photo } from "./style";
import { ReactComponent as SvgShop } from "../../assets/shopping.svg";

const Profile = () => {
  return (
    <Content onClick={(e) => e.stopPropagation()}>
      <Photo></Photo>
      <Entry>Войти</Entry>
      <Cart>
        <SvgShop /> <span>Корзина</span>
      </Cart>
    </Content>
  );
};

export default Profile;
