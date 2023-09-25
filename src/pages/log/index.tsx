import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as SvgClose } from "../../assets/clarity_close.svg";
import { Content, Container, Inputs, Button, NLink, Buttons } from "./style";
import { SubTitle } from "../../shared";

const Log = () => {
  const [reg, setReg] = useState(false);

  let navigate = useNavigate();

  return (
    <Container
      onClick={() => {
        navigate("/");
      }}
    >
      <Content onClick={(e) => e.stopPropagation()} reg={reg}>
        <SubTitle>
          <h3>{reg ? "Регистрация" : "Вход в личный кабинет"}</h3>
        </SubTitle>
        <Inputs>
          {reg && (
            <form>
              <input type="name" placeholder="ФИО" />
              <input type="tel" placeholder="Контактный телефон" />
            </form>
          )}
          <form>
            <input type="email" placeholder="Электронная почта" />
            <input type="password" placeholder="Пароль" />
          </form>
        </Inputs>
        <Buttons>
          <Button color="#FFFDF5" bc="#514A7E">
            {reg ? "Отправить" : "Войти в кабинет"}
          </Button>
          <Button color="#514A7E" bc="#FFFDF5" onClick={() => setReg(!reg)}>
            {reg ? "Войти в кабинет" : "Регистрация"}
          </Button>
        </Buttons>
        <NLink to={"/"}>
          <SvgClose />
        </NLink>
      </Content>
    </Container>
  );
};

export default Log;
