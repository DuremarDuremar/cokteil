import React from "react";
import { ReactComponent as SvgArrow } from "../../assets/arrowLit.svg";
import { Content, Form } from "./style";

const Invite = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    e.currentTarget.reset();
  };

  return (
    <Content>
      <Form onSubmit={sendEmail}>
        <h4>
          Приглашаем к сотрудничеству производителей и поставщиков одежды, обуви
          и аксессуаров
        </h4>
        <input type="text" placeholder="Ваше имя" name="user_name" />
        <input type="tel" placeholder="Номер телефона" name="message" />
        <input type="email" placeholder="Электронная почта" name="user_email" />
        <div>
          <input type="checkbox" />{" "}
          <span>Даю согласие на обработку персональных данных</span>
        </div>
        <button type="submit">
          Отправить <SvgArrow />
        </button>
      </Form>
    </Content>
  );
};

export default Invite;
