import styled from "styled-components";
export const Content = styled.div`
  position: relative;
`;

export const Search = styled.div`
  grid-column: 4 span;
  place-self: center start;
  white-space: nowrap;
  overflow-x: hidden;
  z-index: 2;
  input {
    margin-left: 19px;
    max-width: 21vw;
    width: 100%;
    border-bottom: 0.5px solid #7d7d7d;
    padding-bottom: 4px;
    color: #7d7d7d;
    background-color: #fffdf5;
    font-size: 12px;
    font-family: Roboto;
    font-weight: 100;
  }
`;
