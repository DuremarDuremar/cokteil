import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout";
import { Cart, Catalog, Lot, Main } from "../pages";

import { Content, Global } from "./style";

function App() {
  const [burger, setBurger] = useState<boolean>(false);
  console.log("burger", burger);
  return (
    <>
      <Global />
      <Content>
        <Routes>
          <Route
            path="/"
            element={<Layout burger={burger} setBurger={setBurger} />}
          >
            <Route index element={<Main burger={burger} />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="cart" element={<Cart />} />
            <Route path="lot/:id" element={<Lot />} />
            <Route path="*" element={<Main burger={burger} />} />
          </Route>
        </Routes>
      </Content>
    </>
  );
}

export default App;
