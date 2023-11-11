import React, { FC, useState } from "react";
import { Content, Header, Body } from "./style";

interface IProps {
  header: string;
  text: string | string[];
}

const Accordion: FC<IProps> = ({ header, text }) => {
  const [show, setShow] = useState(false);

  return (
    <Content>
      <Header onClick={() => setShow(!show)}>
        <div>{header}</div>
        <div>{show ? "-" : "+"}</div>
      </Header>
      {show && <Body>{text}</Body>}
    </Content>
  );
};

export default Accordion;
