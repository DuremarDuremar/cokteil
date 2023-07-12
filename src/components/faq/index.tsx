import React, { FC } from "react";
import { Content, Wrapper } from "./style";

import { SubTitle } from "../../shared";

interface IProps {
  items: JSX.Element[];
}

const Faq: FC<IProps> = ({ items }) => {
  return (
    <Content>
      <SubTitle content="FAQ">
        <h3>Часто задаваемые вопросы</h3>
      </SubTitle>
      <Wrapper>{items}</Wrapper>
    </Content>
  );
};

export default Faq;
