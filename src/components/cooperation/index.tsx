import React from "react";
import { SubTitle } from "../../shared";
import { ReactComponent as SvgCog } from "../../assets/clarity_cog.svg";
import { ReactComponent as SvgCoin } from "../../assets/clarity_coin.svg";
import { ReactComponent as SvgEmployee } from "../../assets/clarity_employee.svg";
import { ReactComponent as SvgList } from "../../assets/clarity_list.svg";
import { Benefit, Bloсks, Block, Content } from "./style";

const Cooperation = () => {
  return (
    <Content>
      <SubTitle>
        <h3>Сотрудничество с нами</h3>
      </SubTitle>
      <p>
        Наша компания постоянно растёт и расширяет рынок, поэтому мы
        заинтересованы в новых партнёрах и рассматриваем новые проекты, которые
        могут быть привлекательны и интересны с коммерческой точки зрения.{" "}
      </p>
      <Bloсks>
        <Block>
          <h4>Становитесь партнёром</h4>
          <p>Регистрируйтесь и переходите в свой кабинет</p>
        </Block>
        <Block>
          <h4>Рекламируйте товары</h4>
          <p>Рекламируйте наши товары на форумах, сайтах, в социальных сетях</p>
        </Block>
        <Block>
          <h4>Приводите покупателей</h4>
          <p>Приводите покупателей на наш сайт по уникальной ссылке</p>
        </Block>
        <Block>
          <h4>Получайте бонусы</h4>
          <p>Копите бонусы от каждого оплаченного заказа</p>
        </Block>
      </Bloсks>
      <h4>Это выгодно. Какие преимущества?</h4>
      <Bloсks>
        <Block>
          <SvgCog />
          <p>Регистрируйтесь и переходите в свой кабинет</p>
        </Block>
        <Block>
          <SvgCoin />
          <p>Рекламируйте наши товары на форумах, сайтах, в социальных сетях</p>
        </Block>
        <Block>
          <SvgEmployee />
          <p>Приводите покупателей на наш сайт по уникальной ссылке</p>
        </Block>
        <Block>
          <SvgList />
          <p>Копите бонусы от каждого оплаченного заказа</p>
        </Block>
      </Bloсks>
    </Content>
  );
};

export default Cooperation;
