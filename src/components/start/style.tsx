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
  @media (max-width: 900px) {
    height: 35px;
    svg {
      top: 5px;
      left: 5px;
      position: relative;
    }
  }

  input {
    margin-left: 19px;
    max-width: 21vw;
    width: 100%;
    border-bottom: 0.5px solid #7d7d7d;
    padding-bottom: 4px;
    color: #7d7d7d;
    background-color: #fffdf5;
    font-size: 15px;
    font-family: Roboto;
    font-weight: 100;
    @media (max-width: 900px) {
      border-bottom: none;
      max-width: 100%;
    }
  }
`;
