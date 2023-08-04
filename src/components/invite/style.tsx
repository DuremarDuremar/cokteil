import styled from "styled-components";
export const Content = styled.section`
  margin-top: 150px;
  max-width: 970px;
  width: 100%;
  height: 411px;
  background: #514a7e;
  box-shadow: 0px 4px 20px 0px rgba(51, 51, 51, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.div`
  background: #fffdf5;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 34px 52px 41px;
  input[type="text"],
  input[type="tel"],
  input[type="email"] {
    max-width: 228px;
    width: 100%;
    color: #7d7d7d;
    font-size: 12px;
    font-weight: 100;
    line-height: 118%;
    border-bottom: 1px solid #7d7d7d;
    padding-bottom: 6px;
  }
  input[type="tel"],
  input[type="email"] {
    margin-top: 24px;
  }
  input[type="text"] {
    margin-top: 39px;
  }
  input[type="checkbox"] {
    width: 9px;
    height: 9px;
  }
  div {
    margin-top: 6px;
  }
  span {
    color: #7d7d7d;
    font-size: 10px;
    font-weight: 300;
    line-height: 118%;
    padding-left: 4px;
  }
  button {
    margin-top: 40px;
  }
`;
