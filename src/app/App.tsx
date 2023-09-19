import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout";
import { Cart, Catalog, Lot, Main, Log } from "../pages";

import { Content, Global } from "./style";

function App() {
  return (
    <>
      <Global />
      <Content>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="cart" element={<Cart />} />
            <Route path="lot/:id" element={<Lot />} />
            <Route path="*" element={<Main />} />
          </Route>
          <Route path="log" element={<Log />} />
        </Routes>
      </Content>
    </>
  );
}

export default App;
