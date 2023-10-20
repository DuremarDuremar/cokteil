import styled from "styled-components";

export const Content = styled.section``;

export const Wrapper = styled.div`
  margin-top: 8vw;
  position: relative;
  overflow: hidden;
  > div {
    /* width: 111%; */
  }
  ul {
    margin-left: 11vw;
  }
  li {
    max-width: 278px;
    width: 100%;
    background-size: cover;
    margin-left: 80px;
    @media (max-width: 700px) {
      margin-left: 60px;
    }
  }
`;

export const ButtonSlider = styled.button<{
  prev?: boolean;
}>`
  width: 85px;
  height: 47px;
  background-color: #fffdf5;
  transition: all 0.5s ease-in-out;
  position: absolute;
  svg {
    position: relative;
    fill: #514a7e;
    width: 60px;
  }
  right: 0%;
  bottom: 24%;
  &:hover {
    background: #514a7e;

    svg {
      fill: #fffdf5;
    }
  }
`;
