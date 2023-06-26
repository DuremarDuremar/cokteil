import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout";
import { Cart, Catalog, Lot, Main } from "../pages";

import { Content } from "./style";

function App() {
  return (
    <Content>
      {" "}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="cart" element={<Cart />} />
          <Route path="lot/:id" element={<Lot />} />
        </Route>
      </Routes>
    </Content>
  );
}

export default App;
