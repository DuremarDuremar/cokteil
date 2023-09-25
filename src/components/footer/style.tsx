import styled from "styled-components";
export const Content = styled.footer`
  background: #514a7e;
  color: #fffdf5;
  margin-top: 150px;
  display: flex;
  padding: 82px 0 86px;
`;
export const Block = styled.div`
  flex: 0 0 20%;
  display: flex;
  justify-content: center;
  scroll-behavior: smooth;
  &:last-child {
    align-items: end;
  }
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
  img {
    opacity: 0.5;
    cursor: pointer;
    transition: all 0.7s ease-in-out;
    &:hover {
      opacity: 1;
    }
  }
`;
