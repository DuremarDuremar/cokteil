import React from "react";
import {
  Welcome,
  Advantage,
  Stock,
  Card,
  Reviews,
  Comment,
  Faq,
  Accordion,
  Cooperation,
  Invite,
} from "../../components";
import { Content } from "./style";
import { IComment } from "../../components/comment";
import { Container } from "../../shared";
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

const questions = [
  {
    header: "Как сделать заказ?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci reprehenderit blanditiis earum odit consectetur laudantium deleniti culpa repellat eaque saepe?",
  },
  {
    header: "Способы оплаты",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero pariatur reprehenderit iusto repudiandae deleniti eveniet quasi soluta modi? Laborum dicta quod natus beatae libero delectus autem praesentium fugit deserunt. Temporibus dicta sequi, vitae ipsa, quasi amet veritatis consequatur nostrum suscipit voluptatem impedit obcaecati aliquam reiciendis. Minima corporis autem quibusdam amet, facilis temporibus voluptates quo reiciendis, atque, nemo provident numquam? Sint voluptatum temporibus commodi laborum fuga? Esse voluptas illum et reiciendis laborum ducimus doloremque ratione ab, at odio unde saepe tempora placeat delectus numquam mollitia explicabo facilis, natus praesentium ipsa autem ipsum. A quae sequi fugit suscipit quod nam, deleniti quia reiciendis error. Molestiae adipisci fuga explicabo quis tenetur voluptas harum soluta facere reprehenderit! Distinctio dignissimos quo beatae iusto, sed itaque nulla ullam fugit iure rerum, sequi dolorem, ea eaque error doloribus autem repudiandae quas? Nulla, dolor. Amet, fugit iusto! Veniam, numquam quasi vel eos, ex deleniti repudiandae voluptate perspiciatis placeat quisquam harum necessitatibus nostrum veritatis optio accusamus!",
  },
  {
    header: "Доставка",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptatem dolore nulla, minima quas totam vel mollitia harum sit fuga adipisci quibusdam? Deleniti nesciunt esse, quam quo quia veniam iure, facere modi, veritatis illo soluta placeat! Dolor exercitationem temporibus magni dignissimos est, ipsam optio facere natus. Adipisci vel sed corrupti assumenda quasi eos in consequatur, earum possimus, a esse facilis accusantium dolor atque excepturi doloremque asperiores omnis. Dicta, deleniti pariatur sequi asperiores cumque recusandae harum quam voluptas, vel doloribus consectetur.",
  },
  {
    header: "Сроки доставки",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat beatae assumenda incidunt ea cumque sunt, architecto ut dolores debitis tempora magnam id nobis saepe voluptate ad odit cum enim quisquam. Recusandae, nobis provident sequi, natus animi harum labore quos facilis soluta perferendis quisquam error quis laboriosam nostrum obcaecati, excepturi sit! Minima sit numquam labore repudiandae autem sequi similique. A reiciendis at illum vitae facilis nesciunt quis culpa? Placeat repudiandae repellat aut debitis cumque ut nesciunt magni vel ipsum ea. Minima esse dolores doloremque distinctio vel maiores laudantium molestiae, autem quas ullam beatae laboriosam a veniam, qui reiciendis eum similique placeat eos vitae debitis hic doloribus eius sunt. Sequi magnam laboriosam adipisci.",
  },
  {
    header: "Как сделать обмен?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consequuntur laboriosam rerum autem commodi, necessitatibus ratione blanditiis facere culpa esse repellendus nihil, iure harum sequi sint molestiae facilis. Vel hic rem enim, in impedit dolores ex nobis blanditiis temporibus. Maiores aspernatur, a amet quo ipsa impedit asperiores dicta nobis tempore voluptatibus delectus est esse omnis, ex rerum libero voluptate iste!",
  },
  {
    header: "Как сделать возврат?",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur perspiciatis, amet laboriosam mollitia officiis iure repellendus quia vitae possimus distinctio eaque aliquid vel atque harum culpa quis beatae veritatis et officia debitis. Quos natus officiis eligendi iusto molestiae. Cumque aliquid dolores facilis. Quam accusantium magnam, qui animi sit veritatis eveniet praesentium dicta voluptas consectetur mollitia unde corporis earum repudiandae itaque. Corporis iure eius, numquam autem, quibusdam mollitia possimus molestias totam nam atque quasi! Dicta quaerat voluptates impedit tempore omnis cupiditate dolorem optio eos nobis distinctio veniam magni quo praesentium nulla, eaque amet est explicabo magnam sed quas quam quidem! Molestias recusandae adipisci dolore cumque vitae voluptatum animi laudantium in iure quisquam ipsa placeat dolores eius itaque non eos consequuntur, quam perferendis ea, quibusdam enim impedit! Consectetur ex fuga magnam corrupti harum expedita atque aspernatur molestias. Itaque ad minima maiores vero ea consectetur a labore, pariatur ratione! Enim dolor sapiente aliquid. Molestias facere illum aliquid nostrum vero? Numquam suscipit laborum cupiditate. Animi asperiores iure quaerat maxime ea error modi aperiam cupiditate eos est fugiat, dolor molestiae incidunt unde, fuga atque esse quam voluptates. Dignissimos, modi dolorem voluptas voluptatibus magni quis. Ad qui laborum consequatur quidem et delectus enim doloribus quos officia.",
  },
  {
    header: "Куда и когда вернутся деньги за возвращённый товар?",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur aliquam optio iusto aspernatur ducimus doloremque.",
  },
].map((item, index) => {
  return <Accordion header={item.header} text={item.text} key={index} />;
});

const Main = () => {
  const components = [
    { component: <Welcome />, mt: "50px" },
    { component: <Advantage /> },
    { component: <Stock items={cards} /> },
    { component: <Reviews items={comments} /> },
    { component: <Faq items={questions} /> },
    { component: <Cooperation /> },
    { component: <Invite />, padding: "0 0" },
  ];

  return (
    <Content>
      {components.map((item, index) => {
        return (
          <Container key={index} padding={item.padding} mt={item.mt}>
            {item.component}
          </Container>
        );
      })}
    </Content>
  );
};

export default Main;
