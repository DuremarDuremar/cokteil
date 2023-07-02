import React, { FC } from "react";
import { Content, Foto, Info } from "./style";

export interface IComment {
  name: string;
  img: string;
  data: string;
  text: string;
}

interface IProps {
  item: IComment;
  index: number;
}

const Comment: FC<IProps> = ({ item, index }) => {
  return (
    <Content>
      <Foto>
        <img src={item.img} alt="img" />
      </Foto>
      <Info>
        <p>{item.text}</p>
        <div>
          <h5>{item.name}</h5>
          <span>{item.data}</span>
        </div>
      </Info>
    </Content>
  );
};

export default Comment;
