import styled from "styled-components";

export const Wrapper = styled.div`
  background: #514a7e;
  color: #fffdf5;

  @media (max-width: 1361px) {
    padding-top: 43px;
    margin-top: -1px;
  }

  img {
    opacity: 0.5;
    cursor: pointer;
    transition: all 0.7s ease-in-out;
    @media (max-width: 1361px) {
      margin: 10px 0 10px 5vw;
      width: 12vw;
      height: 12vw;
      min-width: 80px;
      min-height: 80px;
    }
    &:hover {
      opacity: 1;
    }
  }
`;

export const Content = styled.footer`
  display: flex;
  margin-top: 150px;
  padding: 82px 0 86px;
  @media (max-width: 1361px) {
    margin-top: 0px;
    padding: 44px 0;
  }
`;
export const Block = styled.div`
  display: flex;
  flex: 0 0 20%;
  justify-content: center;
  padding: 0 10px;
  &:last-child {
    align-items: end;
  }
  @media (max-width: 1361px) {
    flex: 1 1 40%;
    justify-content: start;
    padding: 0 2vw;
    &:last-child {
      flex: 1 1 20%;
    }
  }

  scroll-behavior: smooth;

  &:nth-child(4) {
    > div {
      display: flex;
      flex-direction: column;
      row-gap: 30px;
      div:first-child {
        svg {
          cursor: pointer;
        }
      }
    }
    span {
      padding-left: 8px;
    }
  }
  h3 {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 20px;
    @media (max-width: 1361px) {
      font-size: 15px;
    }
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
    line-height: 170%;
  }
  svg {
    fill: #fffdf5;
  }
`;

export const Accordions = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Top = styled.div`
  width: 11vw;
  height: 11vw;
  min-width: 70px;
  min-height: 70px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    rotate: -90deg;
    height: 1vw;
    fill: #514a7e;
  }
`;
