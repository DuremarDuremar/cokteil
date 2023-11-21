import styled from "styled-components";
export const Content = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 60px;
  h4 {
    font-size: 20px;
    font-weight: 400;
  }
`;
export const Bloсks = styled.div<{
  icons?: boolean;
}>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  column-gap: 120px;
  @media (max-width: 1410px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    row-gap: 40px;
  }
  @media (max-width: 631px) {
    grid-template-columns: ${({ icons }) => icons && "repeat(1, 1fr)"};
    grid-template-rows: ${({ icons }) => icons && "repeat(4, 1fr)"};
    column-gap: ${({ icons }) => !icons && "25px"};
    row-gap: ${({ icons }) => (icons ? "40px" : "30px")};
  }
`;
export const Block = styled.div<{
  noicons?: boolean;
}>`
  text-align: center;

  ${(props) =>
    props.noicons &&
    `
    @media (max-width: 631px) {
    width: 165px;
    height: 78px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #514a7e;
    border-radius:10px;
  }
    `}

  h4 {
    margin: 0 auto 22px;
    max-width: 150px;
    width: 100%;
    ${(props) =>
      props.noicons &&
      `
    @media (max-width: 631px) {
      font-size: 12px;
      margin: 0;
      color: #fffdf5;
    }
    `}
  }
  svg {
    margin-bottom: 15px;
  }
`;
export const Text = styled.p<{
  size: number;
}>`
  color: #7d7d7d;
  font-size: ${({ size }) => `${size}px`};
  font-weight: 300;
  line-height: 118%;
  @media (max-width: 631px) {
    text-align: center;
  }
`;
