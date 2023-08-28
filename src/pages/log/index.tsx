import React from "react";
import { Content, Container } from "./style";
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
          <button>Войти в кабинет</button>
          <button>Регистрация</button>
        </div>
      </Content>
    </Container>
  );
};

export default Log;
