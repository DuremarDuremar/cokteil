import React from "react";
import { Welcome, Advantage, Stock, Card } from "../../components";
import { Content } from "./style";
import lot_1 from "../../assets/lot1.png";
import lot_2 from "../../assets/lot2.png";
import lot_3 from "../../assets/lot3.png";
import lot_4 from "../../assets/lot4.png";
import lot_5 from "../../assets/lot5.png";
import lot_6 from "../../assets/lot6.png";

const handleDragStart = (e: any) => e.preventDefault();

const items = [
  <div className="item" data-value="1">
    <img src={lot_1} onDragStart={handleDragStart} role="presentation" />
  </div>,
  <div className="item" data-value="2">
    <img src={lot_3} onDragStart={handleDragStart} role="presentation" />
  </div>,
  <div className="item" data-value="3">
    <img src={lot_5} onDragStart={handleDragStart} role="presentation" />
  </div>,
  <div className="item" data-value="4">
    <img src={lot_6} onDragStart={handleDragStart} role="presentation" />
  </div>,
  <div className="item" data-value="5">
    <img src={lot_2} onDragStart={handleDragStart} role="presentation" />
  </div>,
  <div className="item" data-value="6">
    <img src={lot_4} onDragStart={handleDragStart} role="presentation" />
  </div>,
];

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
