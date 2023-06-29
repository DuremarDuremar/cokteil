import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { Content, Title, Wrapper } from "./style";
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
    <img src={lot_2} onDragStart={handleDragStart} role="presentation" />
  </div>,
  <div className="item" data-value="3">
    <img src={lot_3} onDragStart={handleDragStart} role="presentation" />
  </div>,
  <div className="item" data-value="4">
    <img src={lot_4} onDragStart={handleDragStart} role="presentation" />
  </div>,
  <div className="item" data-value="5">
    <img src={lot_5} onDragStart={handleDragStart} role="presentation" />
  </div>,
  <div className="item" data-value="6">
    <img src={lot_6} onDragStart={handleDragStart} role="presentation" />
  </div>,
];

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const Stock = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  const syncActiveIndex = ({ item }: any) => setActiveIndex(item);

  return (
    <Content>
      <Title>
        <h3>Успей купить! </h3>
      </Title>
      <Wrapper>
        <AliceCarousel
          mouseTracking
          items={items}
          paddingLeft={50}
          paddingRight={50}
          responsive={responsive}
          activeIndex={activeIndex}
          onSlideChanged={syncActiveIndex}
          // infinite
          disableButtonsControls={true}
          disableDotsControls={true}
        />
        <button onClick={slidePrev}>Prev...............</button>
        <button onClick={slideNext}>Next.........</button>
      </Wrapper>
    </Content>
  );
};

export default Stock;
