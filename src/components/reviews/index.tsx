import React, { FC, useState } from "react";
import { AddReview, Content, Title, Wrapper } from "./style";

interface IProps {
  items: JSX.Element[];
}

const Reviews: FC<IProps> = ({ items }) => {
  return (
    <Content>
      <Title>Отзывы наших покупателей</Title>
      <Wrapper>{items.map((item) => item)}</Wrapper>
      <AddReview>
        <button>Добавить отзыв</button>
      </AddReview>
    </Content>
  );
};

export default Reviews;
