import React, { useState } from "react";
import { ReactComponent as SvgArrow } from "../../assets/arrowLit.svg";
import { Content, Form } from "./style";

const Invite = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      Name: name,
      Phone: phone,
      Email: email,
    };
    console.log("data", data);
    e.currentTarget.reset();
    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <Content>
      <Form onSubmit={sendEmail}>
        <h4>
          Приглашаем к сотрудничеству производителей и поставщиков одежды, обуви
          и аксессуаров
        </h4>
        <input
          required
          type="text"
          placeholder="Ваше имя"
          name="user_name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          required={email ? false : true}
          type="tel"
          placeholder="Номер телефона"
          name="message"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          required={phone ? false : true}
          type="email"
          placeholder="Электронная почта"
          name="user_email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
          <input required type="checkbox" />{" "}
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
