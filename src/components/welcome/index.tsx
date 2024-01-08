import React, { FC } from "react";
import main_1 from "../../assets/main1.png";
import main_2 from "../../assets/main2.png";
import Nav from "../nav";
import { ReactComponent as SvgArrow } from "../../assets/arrow.svg";
import { Content, WelcomeBottom, WelcomeTop, SearchAdap } from "./style";

interface IProps {
  burger: boolean;
  res900: boolean;
  search: JSX.Element | null;
  setBurger: React.Dispatch<React.SetStateAction<boolean>>;
}

const Welcome: FC<IProps> = ({ burger, res900, search, setBurger }) => {
  if (burger && !res900) {
    return (
      <Content>
        <Nav setBurger={setBurger} />
      </Content>
    );
  }

  return (
    <Content>
      {search && <SearchAdap>{search}</SearchAdap>}
      <WelcomeTop>
        <div>
          {res900 && (
            <div>
              {" "}
              <img src={main_1} alt="main1" />
            </div>
          )}
          {!burger && (
            <h2>
              Добро пожаловать <br /> в <strong>Cocteil</strong>
            </h2>
          )}
          <p>
            Экономим Ваше время! Предлагаем лучшие цены! Доставляем в кратчайшие
            сроки!
          </p>
        </div>

        {res900 && (
          <div>
            <img src={main_2} alt="main2" />
          </div>
        )}
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
