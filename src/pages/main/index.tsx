import React from "react";
import {
  Welcome,
  Advantage,
  Stock,
  Card,
  Reviews,
  Comment,
} from "../../components";
import { Content } from "./style";
import { IComment } from "../../components/comment";
import lot_1 from "../../assets/lot1.png";
import lot_2 from "../../assets/lot2.png";
import lot_3 from "../../assets/lot3.png";
import lot_4 from "../../assets/lot4.png";
import lot_5 from "../../assets/lot5.png";
import lot_6 from "../../assets/lot6.png";
import comment_1 from "../../assets/commentFoto1.png";
import comment_2 from "../../assets/commentFoto2.png";

const cards = [lot_1, lot_3, lot_5, lot_6, lot_2, lot_4].map((item, index) => {
  return <Card lot={item} index={index} key={index} />;
});

const comments = [
  {
    name: "Анна Котлова",
    img: comment_1,
    text: "Платье село отлично! Хороший материал. Буду заказывать еще, осталась очень довольна. ",
    data: "23.05.2021",
  },
  {
    name: "Ольга Рябина",
    img: comment_2,
    text: "Заказываю постоянно одежду в этом магазине! Хорошие цены, хорошее качество! Приятные менеджеры! Все быстро, доступно, удобно! Спасибо.",
    data: "24.05.2021",
  },
  {
    name: "Марина Прошкина",
    img: comment_1,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laborum quidem corporis quasi exercitationem eligendi deserunt et modi molestias commodi vel, impedit dignissimos blanditiis consequatur ipsam. Est repellendus laborum nobis?",
    data: "25.05.2021",
  },
  {
    name: "Юлия Синицына",
    img: comment_2,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, consequuntur.",
    data: "26.05.2021",
  },
  {
    name: "Ирина Смирнова",
    img: comment_1,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloremque laboriosam, itaque corrupti facilis hic sint eligendi, explicabo, commodi et aut ad sed amet magni ea unde adipisci voluptatem ipsam ut tempora dolores? Quod tempora corrupti dolore error consequatur facere quia quisquam placeat minus, at commodi aliquam tempore ratione! Quos enim rem officia fugit iure! Nostrum iusto magnam hic unde perspiciatis animi repellat sint dignissimos.",
    data: "27.05.2021",
  },
].map((item: IComment, index: number) => {
  return <Comment item={item} index={index} key={index} />;
});

const Main = () => {
  return (
    <Content>
      <Welcome />
      <Advantage />
      <Stock items={cards} />
      <Reviews items={comments} />
    </Content>
  );
};

export default Main;
