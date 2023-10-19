import React, { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";
import { Content } from "./style";

const Layout: FC = () => {
  const [burger, setBurger] = useState<boolean>(false);
  const [prof, setProf] = useState<boolean>(false);

  return (
    <Content onClick={() => setProf(false)}>
      <Header
        burger={burger}
        setBurger={setBurger}
        prof={prof}
        setProf={setProf}
      />
      <div className="noscroll">
        <Outlet />
        <Footer />
      </div>
    </Content>
  );
};

export default Layout;
