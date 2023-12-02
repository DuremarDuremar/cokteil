import styled from "styled-components";

export const Content = styled.div``;

export const Foto = styled.div`
  img {
    box-shadow: 0px 4px 10px 0px rgba(81, 74, 126, 0.2);
  }
`;

export const Details = styled.div`
  display: flex;
  margin-top: 13px;
`;
export const Info = styled.div`
  max-width: 148px;
  flex: 60%;
  font-weight: 400;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  row-gap: 13px;
  p,
  span {
    color: #7d7d7d;
    font-size: 12px;
    font-family: Roboto;
    font-style: normal;
    line-height: normal;
  }
  span {
    font-weight: 300;
    padding-left: 23px;
    position: relative;
    @media (max-width: 900px) {
      padding-left: 5px;
    }
    :before {
      content: "";
      display: block;
      position: absolute;
      background-color: #514a7e;
      width: 62px;
      height: 0.5px;
      top: 50%;
      right: -20%;
      @media (max-width: 900px) {
        width: 42px;
        right: -5%;
      }
    }
  }

  button {
    max-width: 148px;
    width: 100%;
    height: 37px;
    font-size: 14px;
    font-weight: 400;
    text-align: left;
    padding-left: 15px;
    border: 0.5px solid #121212;
    transition: all 0.7s ease-in-out;
  }

  div:last-child {
    position: relative;

    svg {
      width: 26px;
      height: 4px;
      position: absolute;
      fill: #514a7e;
      right: 10%;
      top: 50%;
      transform: translateY(-50%);
    }
    &:hover {
      button {
        background: #514a7e;
        color: #fffdf5;
      }
      svg {
        fill: #fffdf5;
      }
    }
  }
`;
export const Buy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 40%;
  cursor: pointer;
  svg {
    width: 30px;
    height: 30px;
  }
`;
