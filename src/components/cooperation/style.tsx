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
  display: flex;
  justify-content: space-between;
  column-gap: 120px;
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
