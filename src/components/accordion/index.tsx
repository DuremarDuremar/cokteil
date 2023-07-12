import React from "react";
import { Content, Wrapper } from "./style";
import { SubTitle } from "../../shared";

const Accordion = () => {
  return (
    <Content>
      <SubTitle content="FAQ">
        <h3>Часто задаваемые вопросы</h3>
      </SubTitle>
      <Wrapper></Wrapper>
    </Content>
  );
};

export default Accordion;
