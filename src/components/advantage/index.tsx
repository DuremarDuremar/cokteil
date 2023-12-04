import React, { FC } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Content, Grid, Item, Card } from "./style";
import { SubTitle } from "../../shared";

interface IProps {
  res630: boolean;
}

const responsive = {
  0: { items: 2, itemsFit: "contain" },
};

const Advantage: FC<IProps> = ({ res630 }) => {
  const Items = [
    ["a", "Скидки постоянным клиентам от 5%"],
    ["b", "Предлагаем самые выгодные цены"],
    ["c", "Наши покупатели всегда остаются довольны"],
    ["d", "Широкий ассортимент товаров для всей семьи"],
    ["z", "Возможность доставки в любой город Беларуси"],
    ["x", "Пункты выдачи заказов рядом с домом"],
  ];

  const renderNextButton = () => {
    return <></>;
  };
  const renderPrevButton = () => {
    return <></>;
  };

  const cards = Items.map((item) => (
    <Card>
      <p key={item[0]}>{item[1]}</p>
    </Card>
  ));

  return (
    <Content>
      <SubTitle>
        <h3>Почему выбирают нас?</h3>
      </SubTitle>
      <Grid>
        {res630 ? (
          Items.map((item) => (
            <Item key={item[0]} area={item[0]}>
              <p>{item[1]}</p>
            </Item>
          ))
        ) : (
          <AliceCarousel
            animationDuration={800}
            disableDotsControls={true}
            infinite
            items={cards}
            mouseTracking
            responsive={responsive}
            renderNextButton={renderNextButton}
            renderPrevButton={renderPrevButton}
            // autoWidth={true}
          />
        )}
      </Grid>
    </Content>
  );
};

export default Advantage;
