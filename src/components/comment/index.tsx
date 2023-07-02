import React, { FC } from "react";
import { Content } from "./style";

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
    <Content key={index}>
      <div>
        <div>
          <img src={item.img} alt="img" />
        </div>
        <div>
          <div>{item.text}</div>
          <div>{item.name}</div>
          <div>{item.data}</div>
        </div>
      </div>
    </Content>
  );
};

export default Comment;
