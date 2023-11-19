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
export const Bloсks = styled.div`
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
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);
    row-gap: 40px;
  }
`;
export const Block = styled.div`
  text-align: center;

  h4 {
    margin: 0 auto 22px;
    max-width: 150px;
    width: 100%;
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
`;
