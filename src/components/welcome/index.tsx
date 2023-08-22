import React, { FC } from "react";
import main_1 from "../../assets/main1.png";
import main_2 from "../../assets/main2.png";
import { ReactComponent as SvgArrow } from "../../assets/arrow.svg";
import { Content, WelcomeBottom, WelcomeTop } from "./style";

const Welcome: FC = () => {
  return (
    <Content>
      <WelcomeTop>
        <div>
          <img src={main_1} alt="main1" />
          <h2>
            Добро пожаловать <br /> в <strong>Cocteil</strong>
          </h2>
          <p>
            Экономим Ваше время! Предлагаем лучшие цены! Доставляем в кратчайшие
            сроки!
          </p>
        </div>

        <div>
          <img src={main_2} alt="main2" />
        </div>
      </WelcomeTop>
      <WelcomeBottom>
        <div>
          <h6>Каталог</h6>
          <SvgArrow />
        </div>
      </WelcomeBottom>
    </Content>
  );
};

export default Welcome;
