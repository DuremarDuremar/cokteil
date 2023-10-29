import React, { FC, useState } from "react";
import Header from "../header";
import Welcome from "../welcome";
import { Container } from "../../shared";
import { Content } from "./style";

const Start: FC = () => {
  const [burger, setBurger] = useState<boolean>(false);
  const [prof, setProf] = useState<boolean>(false);

  console.log(prof, "prof");

  return (
    <Content onClick={() => setProf(false)}>
      <Header
        burger={burger}
        setBurger={setBurger}
        prof={prof}
        setProf={setProf}
      />
      <Container mt={"50px"}>
        <Welcome />
      </Container>
    </Content>
  );
};

export default Start;
