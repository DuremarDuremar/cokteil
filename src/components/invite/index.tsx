import React from "react";
import { Content, Form } from "./style";

const Invite = () => {
  return (
    <Content>
      <Form>
        <h4>
          Приглашаем к сотрудничеству производителей и поставщиков одежды, обуви
          и аксессуаров
        </h4>
        <input type="text" placeholder="Ваше имя" />
        <input type="tel" placeholder="Номер телефона" />
        <input type="email" placeholder="Электронная почта" />
        <input type="checkbox" />
        <button type="submit">Отправить</button>
      </Form>
    </Content>
  );
};

export default Invite;
