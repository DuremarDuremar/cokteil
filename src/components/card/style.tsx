import styled from "styled-components";

export const Content = styled.div``;

export const Foto = styled.div`
  img {
    box-shadow: 0px 4px 10px 0px rgba(81, 74, 126, 0.2);
  }
`;

export const Details = styled.div`
  /* height: 81px; */
  display: flex;
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
    :before {
      content: "";
      display: block;
      position: absolute;
      background-color: #514a7e;
      width: 62px;
      height: 0.5px;
      top: 50%;
      right: -20%;
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
      position: absolute;
      fill: #514a7e;
      right: 10%;
      top: 50%;
      transform: translateY(-50%);
      transition: all 1s ease-in-out;
    }
    &:hover {
      button {
        background: #514a7e;
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
