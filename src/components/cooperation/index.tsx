import React, { FC } from "react";
import { SubTitle } from "../../shared";
import { ReactComponent as SvgCog } from "../../assets/clarity_cog.svg";
import { ReactComponent as SvgCoin } from "../../assets/clarity_coin.svg";
import { ReactComponent as SvgEmployee } from "../../assets/clarity_employee.svg";
import { ReactComponent as SvgList } from "../../assets/clarity_list.svg";
import { Text, Bloсks, Block, Content } from "./style";

interface IProps {
  res630: boolean;
}

const blocks = [
  <>
    <SvgCog />
    <Text size={14}>Автоматизация процессов</Text>
  </>,
  <>
    <SvgCoin />
    <Text size={14}>Пополнение ассортимента</Text>
  </>,
  <>
    <SvgEmployee />
    <Text size={14}>Поддержка и обучение</Text>
  </>,
  <>
    <SvgList />
    <Text size={14}>Бонусы за новых клиентов</Text>
  </>,
];

const Cooperation: FC<IProps> = ({ res630 }) => {
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
      {res630 ? (
        <h4>Это выгодно. Какие преимущества?</h4>
      ) : (
        <SubTitle>
          <h3>Какие преимущества?</h3>
        </SubTitle>
      )}
      <Bloсks>
        {res630
          ? blocks.map((item, index) => {
              return <Block key={index}>{item}</Block>;
            })
          : [blocks[2], blocks[0], blocks[3], blocks[1]].map((item, index) => {
              return <Block key={index}>{item}</Block>;
            })}
      </Bloсks>
    </Content>
  );
};

export default Cooperation;
