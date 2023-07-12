import React, { FC } from "react";
import { Content } from "./style";

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
      {items}
    </Content>
  );
};

export default Faq;
