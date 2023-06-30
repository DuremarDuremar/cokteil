import React, { FC } from "react";
import { ReactComponent as SvgShop } from "../../assets/shopping.svg";
import { Content, Foto, Details, Buy, Info } from "./style";

interface IProps {
  lot: string;
  index: number;
}

const handleDragStart = (e: any) => e.preventDefault();

const Card: FC<IProps> = ({ lot, index }) => {
  return (
    <Content>
      <Foto className="item" data-value={String(index)}>
        <img
          src={lot}
          onDragStart={handleDragStart}
          role="presentation"
          alt="img"
        />
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
