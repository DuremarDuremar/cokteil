import React from "react";
import { Content, Title, Grid, Item } from "./style";

const Advantage = () => {
  const Items = [
    ["a", "Скидки постоянным клиентам от 5%"],
    ["b", "Предлагаем самые выгодные цены"],
    ["c", "Наши покупатели всегда остаются довольны"],
    ["d", "Широкий ассортимент товаров для всей семьи"],
    ["z", "Возможность доставки в любой город Беларуси"],
    ["x", "Пункты выдачи заказов рядом с домом"],
  ];

  return (
    <Content>
      <Title>
        <h3>Почему выбирают нас?</h3>
      </Title>
      <Grid>
        {Items.map((item) => (
          <Item key={item[0]} area={item[0]}>
            {item[1]}
          </Item>
        ))}
      </Grid>
    </Content>
  );
};

export default Advantage;
