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
  1300: {
    items: 2,
    itemsFit: "contain",
  },
};

const Reviews: FC<IProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const syncActiveIndex = ({ item }: any) => setActiveIndex(item);

  console.log("activeIndex", activeIndex);

  return (
    <Content>
      <Title>Отзывы наших покупателей</Title>
      <Wrapper>
        <AliceCarousel
          animationType="fadeout"
          animationDuration={800}
          disableButtonsControls
          infinite
          items={items}
          mouseTracking
          responsive={responsive}
          onSlideChanged={syncActiveIndex}
        />
        <ButtonSlider>
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
