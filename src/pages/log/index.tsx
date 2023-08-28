import React from "react";
import { ReactComponent as SvgClose } from "../../assets/clarity_close.svg";
import { Content, Container, Button, NLink } from "./style";
import { SubTitle } from "../../shared";

const Log = () => {
  return (
    <Container>
      <Content>
        <SubTitle>
          <h3>Вход в личный кабинет</h3>
        </SubTitle>
        <form>
          <input type="email" placeholder="Электронная почта" />
          <input type="password" placeholder="Пароль" />
        </form>
        <div>
          <Button color="#FFFDF5" bc="#514A7E">
            Войти в кабинет
          </Button>
          <Button color="#514A7E" bc="#FFFDF5">
            Регистрация
          </Button>
        </div>
        <NLink to={"/"}>
          <SvgClose />
        </NLink>
      </Content>
    </Container>
  );
};

export default Log;
