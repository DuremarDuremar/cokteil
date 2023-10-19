import React, { FC, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { Content, Wrapper, ButtonSlider } from "./style";
import { SubTitle } from "../../shared";
import { ReactComponent as SvgArrow } from "../../assets/arrow.svg";

interface IProps {
  items: JSX.Element[];
}

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1000: {
    items: 3,
    itemsFit: "contain",
  },
  1360: {
    items: 4,
    itemsFit: "contain",
  },
};

const Stock: FC<IProps> = ({ items }) => {
  const renderNextButton = () => {
    return (
      <ButtonSlider>
        <SvgArrow />
      </ButtonSlider>
    );
  };
  const renderPrevButton = () => {
    return <></>;
  };
  return (
    <Content>
      <SubTitle content="Акции">
        <h3>Успей купить! </h3>
      </SubTitle>
      <Wrapper>
        <AliceCarousel
          animationDuration={800}
          disableDotsControls={true}
          infinite
          items={items}
          mouseTracking
          responsive={responsive}
          renderNextButton={renderNextButton}
          renderPrevButton={renderPrevButton}
        />
      </Wrapper>
    </Content>
  );
};

export default Stock;
