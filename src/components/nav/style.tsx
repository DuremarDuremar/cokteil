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
    row-gap: 20px;
    padding-left: 18px;
    li {
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        font-size: 20px;
        font-weight: 400;
      }
    }
  }
  div {
    cursor: pointer;
  }
`;
