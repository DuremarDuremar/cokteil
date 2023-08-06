import styled from "styled-components";
export const Content = styled.footer`
  background: #514a7e;
  color: #fffdf5;
  margin-top: 150px;
  display: flex;
`;
export const Block = styled.div`
  flex: 0 0 20%;
  display: flex;
  justify-content: center;
  h3 {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  ul {
    font-size: 12px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
  p,
  span {
    font-size: 12px;
  }
  svg {
    fill: #fffdf5;
    cursor: pointer;
  }
`;
