import styled from "styled-components";
import main_1 from "../../assets/main1.png";

export const Content = styled.section`
  img {
    filter: brightness(40%);
  }

  @media (max-width: 900px) {
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(${main_1});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;
export const WelcomeTop = styled.div`
  display: flex;
  height: 563px;
  > div {
    @media (max-width: 900px) {
      flex: 100%;
      justify-content: center;
      align-items: center;
    }

    @media (min-width: 901px) {
      flex: 50%;
    }
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
    @media (max-width: 900px) {
      text-align: center;
    }
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
    @media (max-width: 900px) {
      color: #fffdf5;
      font-size: 37px;
    }
  }
  strong {
    font-family: "Bad Script", cursive;
    color: #514a7e;
    @media (max-width: 900px) {
      color: #fffdf5;
    }
  }
  p {
    max-width: 249px;
    width: 100%;
    color: #7d7d7d;
    font-size: 16px;
    line-height: 118%;
    @media (max-width: 900px) {
      color: #fffdf5;
      font-size: 14px;
      max-width: 220px;
    }
  }
`;
export const WelcomeBottom = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 900px) {
    position: relative;
    top: -140px;
  }
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
    @media (max-width: 900px) {
      background: #514a7e;
    }
    &:hover {
      background: #514a7e;
      @media (max-width: 900px) {
        background: #fffdf5;
      }
      h6 {
        color: #fffdf5;
        @media (max-width: 900px) {
          color: #514a7e;
        }
      }
      svg {
        fill: #fffdf5;
        @media (max-width: 900px) {
          fill: #514a7e;
        }
      }
    }
  }
  h6 {
    color: #514a7e;
    font-size: 20px;
    font-weight: 400;
    margin-top: -20px;
    margin-right: -20px;
    @media (max-width: 900px) {
      color: #fffdf5;
    }
  }
  svg {
    fill: #514a7e;
    margin-bottom: -20px;
    margin-left: -20px;
    @media (max-width: 900px) {
      fill: #fffdf5;
    }
  }
`;
export const SearchAdap = styled.div`
  background-color: #fffdf5;
  width: 80%;
  height: 35px;
  border-radius: 10px;
  margin: 0px auto;
`;
