import React from "react";
import { SubTitle } from "../../shared";
import { ReactComponent as SvgCog } from "../../assets/clarity_cog.svg";
import { ReactComponent as SvgCoin } from "../../assets/clarity_coin.svg";
import { ReactComponent as SvgEmployee } from "../../assets/clarity_employee.svg";
import { ReactComponent as SvgList } from "../../assets/clarity_list.svg";
import { Text, Bloсks, Block, Content } from "./style";

const Cooperation = () => {
  return (
    <Content>
      <SubTitle>
        <h3>Сотрудничество с нами</h3>
      </SubTitle>
      <Text size={16}>
        Наша компания постоянно растёт и расширяет рынок, поэтому мы
        заинтересованы в новых партнёрах и рассматриваем новые проекты, которые
        могут быть привлекательны и интересны с коммерческой точки зрения.{" "}
      </Text>
      <Bloсks>
        <Block>
          <h4>Становитесь партнёром</h4>
          <Text size={12}>Регистрируйтесь и переходите в свой кабинет</Text>
        </Block>
        <Block>
          <h4>Рекламируйте товары</h4>
          <Text size={12}>
            Рекламируйте наши товары на форумах, сайтах, в социальных сетях
          </Text>
        </Block>
        <Block>
          <h4>Приводите покупателей</h4>
          <Text size={12}>
            Приводите покупателей на наш сайт по уникальной ссылке
          </Text>
        </Block>
        <Block>
          <h4>Получайте бонусы</h4>
          <Text size={12}>Копите бонусы от каждого оплаченного заказа</Text>
        </Block>
      </Bloсks>
      <h4>Это выгодно. Какие преимущества?</h4>
      <Bloсks>
        <Block>
          <SvgCog />
          <Text size={14}>Автоматизация процессов</Text>
        </Block>
        <Block>
          <SvgCoin />
          <Text size={14}>Пополнение ассортимента</Text>
        </Block>
        <Block>
          <SvgEmployee />
          <Text size={14}>Поддержка и обучение</Text>
        </Block>
        <Block>
          <SvgList />
          <Text size={14}>Бонусы за новых клиентов</Text>
        </Block>
      </Bloсks>
    </Content>
  );
};

export default Cooperation;
