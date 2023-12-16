import styled from "styled-components";

export const Content = styled.header`
  height: 135px;
  padding: 0 8.9%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  /* position: relative; */

  > div {
    width: 100%;
  }
  svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

export const Burger = styled.div`
  grid-column: 6 span;
  place-self: center start;
  svg {
    width: 36px;
    height: 36px;
  }
`;

export const Avatar = styled.div`
  grid-column: 1 span;
  place-self: center;
  text-align: end;
`;
export const Shop = styled.div`
  grid-column: 1 span;
  place-self: center;
  text-align: end;
`;
