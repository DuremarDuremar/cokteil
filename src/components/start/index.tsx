import React, { FC, useState } from "react";
import Header from "../header";
import Welcome from "../welcome";
import { Container } from "../../shared";
import { Content, Search } from "./style";
import { ReactComponent as SvgSearch } from "../../assets/search.svg";

interface IProps {
  res900: boolean;
}

const Start: FC<IProps> = ({ res900 }) => {
  const [burger, setBurger] = useState<boolean>(false);
  const [prof, setProf] = useState<boolean>(false);

  const search = (
    <Search>
      <SvgSearch />
      <input type="text" placeholder="Поиск" />
    </Search>
  );

  return (
    <Content
      onClick={() => {
        setProf(false);
        burger === true && setBurger(false);
      }}
    >
      <Header
        burger={burger}
        setBurger={setBurger}
        prof={prof}
        setProf={setProf}
        search={res900 ? search : null}
      />
      <Container mt={"50px"}>
        <Welcome burger={burger} />
      </Container>
    </Content>
  );
};

export default Start;
