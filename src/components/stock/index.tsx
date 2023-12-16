import React, { FC, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { Content, Wrapper, ButtonSlider, NewItems } from "./style";
import { SubTitle } from "../../shared";
import { ReactComponent as SvgArrow } from "../../assets/arrow.svg";

interface IProps {
  items: JSX.Element[];
  res900: boolean;
}

const responsive = {
  0: { items: 1, itemsFit: "contain" },
  700: { items: 2, itemsFit: "contain" },
  1100: {
    items: 3,
    itemsFit: "contain",
  },
  1360: {
    items: 4,
    itemsFit: "contain",
  },
};

const Stock: FC<IProps> = ({ items, res900 }) => {
  const [number, setNumber] = useState(4);

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
        {res900 ? (
          <AliceCarousel
            animationDuration={800}
            disableDotsControls={true}
            infinite
            items={items}
            mouseTracking
            responsive={responsive}
            renderNextButton={renderNextButton}
            renderPrevButton={renderPrevButton}
            autoWidth={true}
          />
        ) : (
          <>
            {items.map((item, index) => {
              if (index < number) {
                return item;
              }
              return;
            })}
          </>
        )}
      </Wrapper>
      {!res900 && items.length > number && (
        <NewItems onClick={() => setNumber(number + 2)}>
          <p>Смотреть еще</p>
          <SvgArrow />
        </NewItems>
      )}
    </Content>
  );
};

export default Stock;
