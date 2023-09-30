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

export const Form = styled.form`
  background: #fffdf5;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 34px 52px 41px;
  h4 {
    font-size: 20px;
    font-weight: 400;
    line-height: 118%;
  }
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
    background: #514a7e;
    color: #fffdf5;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    max-width: 148px;
    width: 100%;
    padding: 13px 0;
    font-size: 14px;
    border: 0.5px solid #514a7e;
    transition: all 0.7s ease-in-out;
    svg {
      width: 26px;
      height: 4px;
      fill: #fffdf5;
      transition: all 0.7s ease-in-out;
    }
    &:hover {
      background: #fffdf5;
      color: #514a7e;

      svg {
        fill: #514a7e;
      }
    }
  }
`;

export const Application = styled.section`
  display: flex;
  justify-content: center;
  > div {
    width: 685px;
    height: 87px;
  }
  h6 {
    display: inline;
  }
`;
