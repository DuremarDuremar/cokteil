import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { Content, Title, Wrapper, ButtonSlider } from "./style";
import { ReactComponent as SvgArrow } from "../../assets/arrow.svg";
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

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: {
    items: 3,
    itemsFit: "contain",
  },
};

const Stock = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slidePrev = () => setActiveIndex(activeIndex > 0 ? activeIndex - 1 : 0);
  const slideNext = () =>
    setActiveIndex(
      activeIndex < items.length - 3 ? activeIndex + 1 : items.length
    );
  const syncActiveIndex = ({ item }: any) => setActiveIndex(item);

  // console.log(activeIndex);

  return (
    <Content>
      <Title>
        <h3>Успей купить! </h3>
      </Title>
      <Wrapper>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          activeIndex={activeIndex}
          onSlideChanged={syncActiveIndex}
          disableButtonsControls={true}
          disableDotsControls={true}
        />
        {activeIndex > 0 && (
          <ButtonSlider onClick={slidePrev} prev>
            <SvgArrow />
          </ButtonSlider>
        )}
        {activeIndex < items.length - 3 && (
          <ButtonSlider onClick={slideNext}>
            <SvgArrow />
          </ButtonSlider>
        )}
      </Wrapper>
    </Content>
  );
};

export default Stock;
