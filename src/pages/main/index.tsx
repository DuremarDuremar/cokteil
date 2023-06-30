import React from "react";
import { Welcome, Advantage, Stock, Card } from "../../components";
import { Content } from "./style";
import lot_1 from "../../assets/lot1.png";
import lot_2 from "../../assets/lot2.png";
import lot_3 from "../../assets/lot3.png";
import lot_4 from "../../assets/lot4.png";
import lot_5 from "../../assets/lot5.png";
import lot_6 from "../../assets/lot6.png";

const items = [lot_1, lot_3, lot_5, lot_6, lot_2, lot_4].map((item, index) => {
  return <Card lot={item} index={index} key={index} />;
});

const Main = () => {
  return (
    <Content>
      <Welcome />
      <Advantage />
      <Stock items={items} />
    </Content>
  );
};

export default Main;
