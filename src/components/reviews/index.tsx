import React, { FC, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { AddReview, Content, Wrapper, ButtonSlider } from "./style";
import { SubTitle } from "../../shared";
import { ReactComponent as SvgArrow } from "../../assets/arrowLit.svg";

interface IProps {
  items: JSX.Element[];
  res1360: boolean;
}
const responsive = {
  0: { items: 1, itemsFit: "contain" },

  800: {
    items: 2,
    itemsFit: "contain",
  },
};

const Reviews: FC<IProps> = ({ items, res1360 }) => {
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
      <SubTitle>
        <h3>Отзывы наших покупателей</h3>
      </SubTitle>
      <Wrapper>
        <AliceCarousel
          animationDuration={1200}
          disableDotsControls={res1360 ? true : false}
          disableButtonsControls={!res1360 ? true : false}
          infinite
          items={items}
          mouseTracking
          responsive={responsive}
          renderNextButton={renderNextButton}
          renderPrevButton={renderPrevButton}
        />
      </Wrapper>
      <AddReview>
        <button>Добавить отзыв</button>
      </AddReview>
    </Content>
  );
};

export default Reviews;
