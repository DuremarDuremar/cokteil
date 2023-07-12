import React, { FC, useState } from "react";
import { Content } from "./style";

interface IProps {
  header: string;
  text: string;
}

const Accordion: FC<IProps> = ({ header, text }) => {
  const [show, setShow] = useState(false);

  return (
    <Content>
      <div className="accordian-header" onClick={() => setShow(!show)}>
        <div>Accordion Header</div>
        <div className="sign">{show ? "-" : "+"}</div>
      </div>
      {show && (
        <div className="accordian-body">
          Lorem Ipsum is simply dummy text of the printing and type setting
          industry. Lorem Ipsum has been the industry's ever since the 1500s,
          when an unknown printer took a galley of type standard dummy text and
          scrambled it to make a type specimen book.
        </div>
      )}
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
