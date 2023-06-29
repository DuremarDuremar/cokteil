import React, { FC } from "react";
import { Content } from "./style";

interface IProps {
  lot: string;
}

const Card: FC<IProps> = ({ lot }) => {
  return <Content>Card</Content>;
};

export default Card;
