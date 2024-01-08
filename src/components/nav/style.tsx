import styled from "styled-components";
export const Content = styled.div`
  width: 600px;
  /* height: 875px; */
  z-index: 2;
  position: absolute;

  @media (max-width: 900px) {
    width: 100%;
    background-color: #121212;
  }
`;

export const Wrapper = styled.div`
  /* position: absolute;
  background: #fffdf5; */
`;

export const List = styled.nav<{
  height: string;
}>`
  background: #121212;
  color: #fffdf5;
  box-shadow: 0px 4px 20px 0px rgba(51, 51, 51, 0.05);
  width: 278px;
  height: ${(props) => props.height};
  font-size: 14px;
  @media (max-width: 900px) {
    width: 208px;
  }
  ul {
    display: flex;
    flex-direction: column;
    padding-left: 18px;

    li {
      position: relative;
      cursor: pointer;
      &:not(:first-child) {
        padding-top: 20px;
      }
      &:hover > span {
        font-size: 20px;
        font-weight: 400;
      }
      span {
        transition: all 0.3s ease-in-out;
      }
      ul {
        transition: all 0.6s ease-in-out;
        opacity: 0;
      }
      &:hover > ul {
        transform: translateX(90%);
        opacity: 1;
        visibility: visible;
      }
    }
  }
  div {
    cursor: pointer;
  }
`;

export const SubList = styled.ul`
  background: #121212;
  width: 278px;
  padding: 30px 0;
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  @media (max-width: 900px) {
    width: 208px;
  }
`;

export const Top = styled.div`
  background: #514a7e;
  height: 100px;
  position: relative;
  top: 20px;
  padding-top: 15px;
  div {
    color: #fffdf5;
    font-size: 20px;
    font-weight: 300;
    line-height: 87.305%;
    text-align: center;
  }
`;
