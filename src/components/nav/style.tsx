import styled from "styled-components";
export const Content = styled.div`
  position: relative;
`;
export const List = styled.nav`
  position: absolute;
  background: #121212;
  color: #fffdf5;
  box-shadow: 0px 4px 20px 0px rgba(51, 51, 51, 0.05);
  width: 278px;
  height: 855px;
  font-size: 14px;
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
      span {
        transition: all 0.3s ease-in-out;

        &:hover {
          font-size: 20px;
          font-weight: 400;
        }
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
  height: 855px;
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
`;
