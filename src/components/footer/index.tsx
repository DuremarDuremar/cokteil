import React from "react";
import { ReactComponent as SvgLinks } from "../../assets/links.svg";
import { ReactComponent as SvgPhone } from "../../assets/phone.svg";
import { ReactComponent as SvgTime } from "../../assets/time.svg";
import logo from "../../assets/logo.png";
import { Content, Block } from "./style";

const Footer = () => {
  return (
    <Content>
      <Block>
        <div>
          <h3>Информация</h3>
          <ul>
            <li>Главная</li>
            <li>Акции</li>
            <li>Каталог</li>
            <li>Возврат</li>
            <li>Доставка</li>
            <li>Партнёрам</li>
            <li>Способы оплаты</li>
            <li>Как сделать заказ?</li>
          </ul>
        </div>
      </Block>
      <Block>
        <div>
          <h3>Мой кабинет</h3>
          <ul>
            <li>Мои заказы</li>
            <li>Мои адреса</li>
            <li>Мои скидки</li>
            <li>Моя информация</li>
          </ul>
        </div>
      </Block>
      <Block>
        <div>
          <h3>Контактная информация</h3>
          <p>
            ИП Вишневский Иван Сергеевич государственная регистрация №690867884
            от 31.07.2020. Логойским горисполкомом Защита прав потребителей
            +375259990755
          </p>
        </div>
      </Block>
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
      <Block>
        <div>
          <img src={logo} alt="logo" />
        </div>
      </Block>
    </Content>
  );
};

export default Footer;
