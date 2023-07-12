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
  1300: {
    items: 3,
    itemsFit: "contain",
  },
};

const Stock: FC<IProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slidePrev = () => setActiveIndex(activeIndex > 0 ? activeIndex - 1 : 0);
  const slideNext = () =>
    setActiveIndex(
      activeIndex < items.length - 3 ? activeIndex + 1 : items.length
    );
  const syncActiveIndex = ({ item }: any) => setActiveIndex(item);

  return (
    <Content>
      <SubTitle content="Акции">
        <h3>Успей купить! </h3>
      </SubTitle>
      <Wrapper>
        <AliceCarousel
          mouseTracking
          animationDuration={800}
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
