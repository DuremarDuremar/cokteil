import React, { FC, useState } from "react";
import { Content, Header, Body } from "./style";

interface IProps {
  header: string;
  text: string;
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

/* <div className="tab">
          <input type="checkbox" id="tab3" name="tab-group" />
          <label htmlFor="tab3" className="tab-title">
            Чем HTML5 отличается от HTML4?
          </label>
          <section className="tab-content">
            В HTML5 добавлены новые элементы, вроде &lt;header&gt;,
            &lt;footer&gt;, &lt;aside&gt;, &lt;article&gt;, появилась
            долгожданная поддержка аудио, видео и многое другое.
          </section>
        </div>*/
