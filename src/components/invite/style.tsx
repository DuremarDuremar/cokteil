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
    color: #7d7d7d;
    font-size: 12px;
    font-weight: 100;
    line-height: 118%;
    border-bottom: 1px solid #7d7d7d;
  }
  input[type="tel"],
  input[type="email"] {
    margin-top: 24px;
  }
  input[type="text"] {
    margin-top: 39px;
  }
`;
