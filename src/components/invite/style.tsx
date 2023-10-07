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
`;

export const Wrapper = styled.div`
  position: relative;
  padding-left: 7px;
  margin-top: 60px;
  width: 685px;
  height: 87px;
  div:last-child {
    display: flex;
    margin-top: 31px;
  }
  h6 {
    color: #514a7e;
    font-family: Bad Script;
    font-size: 40px;
    font-weight: 400;
    line-height: 87.305%;
    padding-left: 53px;
  }
  span {
    font-size: 16px;
    line-height: 118%;
  }
`;

export const Item = styled.div<{
  first?: boolean;
}>`
  position: absolute;
  left: ${({ first }) => (first ? "-16vw" : "-6vw")};
  top: ${({ first }) => (first ? "-60px" : "70px")};

  background: #514a7e;
  box-shadow: 0px 4px 10px 0px rgba(81, 74, 126, 0.4);
  width: ${({ first }) => (first ? "73px" : "47px")};
  height: ${({ first }) => (first ? "73px" : "47px")};
  border-radius: ${({ first }) => (first ? "73px" : "47px")};
`;

export const Close = styled.div`
  position: absolute;
  right: -10vw;
  top: -110px;
  background: #514a7e;
  box-shadow: 0px 4px 10px 0px rgba(81, 74, 126, 0.4);
  border-radius: 50%;
  width: 47px;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    fill: #fffdf5;
  }
`;
