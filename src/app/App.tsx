import React from "react";
import { Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Layout from "../layout";
import { Cart, Catalog, Lot, Main, Log } from "../pages";

import { Content, Global } from "./style";

function App() {
  const [res1360, res900, res630] = [
    useMediaQuery({ query: "(min-width: 1361px)" }),
    useMediaQuery({ query: "(min-width: 901px)" }),
    useMediaQuery({ query: "(min-width: 631px)" }),
  ];

  return (
    <>
      <Global />
      <Content>
        <Routes>
          <Route path="/" element={<Layout res900={res900} />}>
            <Route index element={<Main res1360={res1360} />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="cart" element={<Cart />} />
            <Route path="lot/:id" element={<Lot />} />
            <Route path="*" element={<Main res1360={res1360} />} />
          </Route>
          <Route path="log" element={<Log />} />
        </Routes>
      </Content>
    </>
  );
}

export default App;
