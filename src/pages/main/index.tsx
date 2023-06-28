import React from "react";
import { Welcome, Advantage, Stock } from "../../components";
import { Content } from "./style";

const Main = () => {
  return (
    <Content>
      <Welcome />
      <Advantage />
      <Stock />
    </Content>
  );
};

export default Main;
