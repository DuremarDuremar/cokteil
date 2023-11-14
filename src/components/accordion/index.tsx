import React, { FC, useState } from "react";
import { Content, Header, Body, Corner } from "./style";
import { ReactComponent as SvgCorner } from "../../assets/corner.svg";

interface IProps {
  header: string;
  text?: string;
  links?: string[];
}

const Accordion: FC<IProps> = ({ header, text, links }) => {
  const [show, setShow] = useState(false);

  return (
    <Content>
      <Header onClick={() => setShow(!show)}>
        <div>{header}</div>
        <div>
          {text && <> {show ? "-" : "+"}</>}
          {links && (
            <Corner show={show}>
              <SvgCorner />
            </Corner>
          )}
        </div>
      </Header>
      {show && (
        <Body>
          {text && <span>{text}</span>}
          {links && (
            <ul>
              {links.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </Body>
      )}
    </Content>
  );
};

export default Accordion;
