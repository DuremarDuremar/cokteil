import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ReactComponent as SvgArrow } from "../../assets/arrowLit.svg";
import { Content, Form } from "./style";

const Invite = () => {
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y8qkh3b",
        "template_jvkskr7",
        form.current,
        "4ZpC4RTDplq_DJSm6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Content>
      <Form ref={form} onSubmit={sendEmail}>
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
