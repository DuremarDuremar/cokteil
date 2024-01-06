import styled from "styled-components";

export const Content = styled.header`
  height: 135px;
  padding: 0 8.9%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  svg {
    fill: #121212;
  }
  @media (max-width: 900px) {
    background: #514a7e;
    height: 63px;
    position: relative;
    top: -63px;
    svg {
      fill: #fffdf5;
    }
  }

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
  @media (max-width: 900px) {
    grid-column: 4 span;
    text-align: center;
  }
`;

export const Avatar = styled.div`
  grid-column: 1 span;
  place-self: center;
  text-align: end;
  @media (max-width: 900px) {
    grid-column: 4 span;
    text-align: center;
    svg {
      width: 36px;
      height: 36px;
    }
  }
`;
export const Shop = styled.div`
  grid-column: 1 span;
  place-self: center;
  text-align: end;
  @media (max-width: 900px) {
    grid-column: 4 span;
    text-align: center;
    svg {
      width: 36px;
      height: 36px;
    }
  }
`;
