import styled from "styled-components";
import main_1 from "../../assets/main1.png";

export const Content = styled.section`
  @media (max-width: 900px) {
    background: url(${main_1});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
export const WelcomeTop = styled.div`
  display: flex;
  height: 563px;
  > div {
    flex: 50%;
  }
  img {
    width: 100%;
    background: lightgray 50% / cover no-repeat;
    box-shadow: 0px 4px 10px 0px rgba(81, 74, 126, 0.4);
    min-width: 200px;
  }

  div:first-child {
    display: flex;
    flex-direction: column;
    row-gap: 60px;
    img {
      max-width: 278px;
      max-height: 242px;
    }
  }
  div:last-child {
    text-align: end;
    img {
      max-width: 476px;
      max-height: 416px;
    }
  }
  h2 {
    font-size: 60px;
    font-weight: 300;
    line-height: 115%;
    @media (max-width: 1361px) {
      font-size: 40px;
    }
  }
  strong {
    font-family: "Bad Script", cursive;
    color: #514a7e;
  }
  p {
    max-width: 249px;
    width: 100%;
    color: #7d7d7d;
    font-size: 16px;
    line-height: 118%;
  }
`;
export const WelcomeBottom = styled.div`
  display: flex;
  justify-content: center;
  > div {
    width: 193px;
    height: 193px;
    border-radius: 193px;
    border: 1px solid #514a7e;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.9s ease-in-out;
    &:hover {
      background: #514a7e;
      h6 {
        color: #fffdf5;
      }
      svg {
        fill: #fffdf5;
      }
    }
  }
  h6 {
    color: #514a7e;
    font-size: 20px;
    font-weight: 400;
    margin-top: -20px;
    margin-right: -20px;
  }
  svg {
    fill: #514a7e;
    margin-bottom: -20px;
    margin-left: -20px;
  }
`;
