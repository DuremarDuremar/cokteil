import React, { FC, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { AddReview, Content, Title, Wrapper, ButtonSlider } from "./style";
import { ReactComponent as SvgArrow } from "../../assets/arrowLit.svg";

interface IProps {
  items: JSX.Element[];
}
const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1000: {
    items: 2,
    itemsFit: "contain",
  },
};

const Reviews: FC<IProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const syncActiveIndex = ({ item }: any) => setActiveIndex(item);

  const slideNext = () =>
    setActiveIndex(activeIndex < items.length - 2 ? activeIndex + 2 : 0);

  console.log(activeIndex, "activeIndex");

  return (
    <Content>
      <Title>
        <h3>Отзывы наших покупателей</h3>{" "}
      </Title>
      <Wrapper>
        <AliceCarousel
          animationDuration={1200}
          disableButtonsControls={true}
          disableDotsControls={true}
          items={items}
          mouseTracking
          responsive={responsive}
          activeIndex={activeIndex}
          onSlideChanged={syncActiveIndex}
        />
        <ButtonSlider
          onClick={slideNext}
          prev={activeIndex >= items.length - 2 ? true : false}
        >
          <SvgArrow />
        </ButtonSlider>
      </Wrapper>
      <AddReview>
        <button>Добавить отзыв</button>
      </AddReview>
    </Content>
  );
};

export default Reviews;
