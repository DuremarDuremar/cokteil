import styled from "styled-components";

export const Content = styled.header`
  height: 135px;
  background-color: lightgrey;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding-bottom: 15px;
`;

export const Burger = styled.div`
  grid-column: 6 span;
  place-self: center start;
`;
export const Search = styled.div`
  grid-column: 4 span;
  place-self: center start;
`;
export const Avatar = styled.div`
  grid-column: 1 span;
  place-self: center;
`;
export const Shop = styled.div`
  grid-column: 1 span;
  place-self: center;
`;
