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

  const order = [
    <Header
      burger={burger}
      setBurger={setBurger}
      prof={prof}
      setProf={setProf}
      search={res900 ? search : null}
      res900={res900}
    />,
    <Container mt={!res900 ? "0" : "50px"} padding={!res900 ? "0" : "0 8.9%"}>
      <Welcome
        burger={burger}
        res900={res900}
        search={!res900 ? search : null}
        setBurger={setBurger}
      />
    </Container>,
  ].map((item, index) => <div key={index}>{item}</div>);

  return (
    <Content
      onClick={() => {
        setProf(false);
        burger === true && setBurger(false);
      }}
    >
      {res900 ? order : order.reverse()}
    </Content>
  );
};

export default Start;
