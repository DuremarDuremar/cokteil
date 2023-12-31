import React, { useState } from "react";
import { SubTitle } from "../../shared";
import { ReactComponent as SvgArrow } from "../../assets/arrowLit.svg";
import { ReactComponent as SvgClose } from "../../assets/clarity_close.svg";
import { Content, Form, Application, Wrapper, Item, Close } from "./style";

const Invite = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [application, setApplication] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      Name: name,
      Phone: phone,
      Email: email,
    };
    console.log("data", data);
    e.currentTarget.reset();
    setApplication(true);
  };
  if (!application) {
    return (
      <Content>
        <Form onSubmit={sendEmail} autoComplete="off">
          <h4>
            Приглашаем к сотрудничеству производителей и поставщиков одежды,
            обуви и аксессуаров
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
            minLength={7}
            placeholder="Номер телефона"
            name="message"
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            required={phone ? false : true}
            type="email"
            minLength={7}
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
  } else {
    return (
      <Application>
        <Wrapper>
          <Item first />
          <Item />
          <Close onClick={() => setApplication(false)}>
            <SvgClose />
          </Close>
          <SubTitle>
            <h3>Ваша заявка обрабатывается.</h3>
          </SubTitle>
          <div>
            <span>Наш специалист с Вами свяжется в ближайшее время</span>
            <h6>Спасибо!</h6>
          </div>
        </Wrapper>
      </Application>
    );
  }
};

export default Invite;
