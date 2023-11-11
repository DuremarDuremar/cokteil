import React, { FC } from "react";
import { animateScroll as scroll } from "react-scroll";
import Accordion from "../accordion";
import { ReactComponent as SvgLinks } from "../../assets/links.svg";
import { ReactComponent as SvgPhone } from "../../assets/phone.svg";
import { ReactComponent as SvgTime } from "../../assets/time.svg";
import logo from "../../assets/logo.png";
import { Wrapper, Content, Block, Accordions } from "./style";

const words = [
  {
    header: "Информация",
    links: [
      "Главная",
      "Акции",
      "Каталог",
      "Возврат",
      "Доставка",
      "Партнёрам",
      "Способы оплаты",
      "Как сделать заказ?",
    ],
  },
  {
    header: "Мой кабинет",
    links: ["Мои заказы", "Мои адреса", "Мои скидки", "Моя информация"],
  },
  {
    header: "Сотрудничество",
    links: [
      "Становитесь партнёром",
      "Рекламируйте товары",
      "Приводите покупателей",
      "Получайте бонусы",
    ],
  },
  {
    header: "Контакты",
    links: [
      "ИП Вишневский Иван Сергеевич государственная регистрация №690867884 от 31.07.2020. Логойским горисполкомом Защита прав потребителей +375259990755",
    ],
  },
];

interface IProps {
  res1360: boolean;
}

const name = (
  <div
    onClick={() => {
      scroll.scrollToTop();
    }}
  >
    <img src={logo} alt="logo" />
  </div>
);

const bloks = [
  <>
    <h3>{words[0].header}</h3>
    <ul>
      {words[0].links.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </>,
  <>
    <h3>{words[1].header}</h3>
    <ul>
      {words[1].links.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </>,
  <>
    <h3>Контактная информация</h3>
    <p>{words[3].links[0]}</p>
  </>,
];

const Footer: FC<IProps> = ({ res1360 }) => {
  return (
    <Wrapper>
      {!res1360 && name}

      <Content>
        {res1360 ? (
          bloks.map((item, index) => {
            return (
              <Block key={index}>
                <div>{item}</div>
              </Block>
            );
          })
        ) : (
          <Block>
            <Accordions>
              {words.map((item, index) => {
                return (
                  <Accordion
                    key={index}
                    header={item.header}
                    text={item.links}
                  />
                );
              })}
            </Accordions>
          </Block>
        )}

        <Block>
          <div>
            <div>
              <h3>Соц. сети</h3>
              <SvgLinks />
            </div>
            <div>
              <SvgPhone />
              <span>+375255990755</span>
            </div>
            <div>
              <SvgTime />
              <span>круглосуточно, без выходных</span>
            </div>
          </div>
        </Block>
        {res1360 && <Block>{name}</Block>}
      </Content>
    </Wrapper>
  );
};

export default Footer;
