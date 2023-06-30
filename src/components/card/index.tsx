import React, { FC } from "react";
import { Content, Foto, Details, Buy } from "./style";

interface IProps {
  lot: string;
  index: number;
}

const handleDragStart = (e: any) => e.preventDefault();

const Card: FC<IProps> = ({ lot, index }) => {
  return (
    <Content>
      <Foto className="item" data-value={String(index)}>
        <img
          src={lot}
          onDragStart={handleDragStart}
          role="presentation"
          alt="img"
        />
      </Foto>
      <Buy>1hhhhhhhhhhhhh</Buy>
      <Details>3ggggggggggggggg</Details>
    </Content>
  );
};

export default Card;
