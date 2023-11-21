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

const blocks1 = [
  ["Становитесь партнёром", "Регистрируйтесь и переходите в свой кабинет"],
  [
    "Рекламируйте товары",
    "Рекламируйте наши товары на форумах, сайтах, в социальных сетях",
  ],
  [
    "Приводите покупателей",
    "Приводите покупателей на наш сайт по уникальной ссылке",
  ],
  ["Получайте бонусы", "Копите бонусы от каждого оплаченного заказа"],
];

const blocks2 = [
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
      <Text size={res630 ? 16 : 12}>
        Наша компания постоянно растёт и расширяет рынок, поэтому мы
        заинтересованы в новых партнёрах и рассматриваем новые проекты, которые
        могут быть привлекательны и интересны с коммерческой точки зрения.{" "}
      </Text>
      <Bloсks>
        {blocks1.map((item, index) => {
          return (
            <Block key={index} noicons>
              <h4>{item[0]}</h4>
              {res630 && <Text size={12}>{item[1]}</Text>}
            </Block>
          );
        })}
      </Bloсks>
      {res630 ? (
        <h4>Это выгодно. Какие преимущества?</h4>
      ) : (
        <SubTitle>
          <h3>Какие преимущества?</h3>
        </SubTitle>
      )}
      <Bloсks icons>
        {res630
          ? blocks2.map((item, index) => {
              return <Block key={index}>{item}</Block>;
            })
          : [blocks2[2], blocks2[0], blocks2[3], blocks2[1]].map(
              (item, index) => {
                return <Block key={index}>{item}</Block>;
              }
            )}
      </Bloсks>
    </Content>
  );
};

export default Cooperation;
