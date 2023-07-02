import React, { FC } from "react";
import { ReactComponent as SvgShop } from "../../assets/shopping.svg";
import { ReactComponent as SvgArrow } from "../../assets/arrowLit.svg";
import { Content, Foto, Details, Buy, Info } from "./style";

interface IProps {
  lot: string;
  index: number;
}

const handleDragStart = (e: any) => e.preventDefault();

const Card: FC<IProps> = ({ lot, index }) => {
  return (
    <Content
      onDragStart={handleDragStart}
      role="presentation"
      className="item"
      data-value={String(index)}
    >
      <Foto>
        <img src={lot} alt="img" />
      </Foto>
      <Details>
        <Info>
          <div>
            50.00 р <span>65.00 р</span>
          </div>
          <div>
            <p>Блузка женская классная</p>
          </div>
          <div>
            <button>Подробнее</button>
            <SvgArrow />
          </div>
        </Info>
        <Buy>
          <SvgShop />
        </Buy>
      </Details>
    </Content>
  );
};

export default Card;
