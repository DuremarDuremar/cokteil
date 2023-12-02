import styled from "styled-components";

export const Content = styled.section``;

export const Wrapper = styled.div`
  margin-top: calc(8vw + 10px);
  position: relative;
  overflow: hidden;
  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 30px;
    column-gap: 4vw;
  }
  > div {
    /* width: 111%; */
  }
  ul {
    /* margin-left: 11vw; */
  }
  li {
    max-width: 278px;
    width: 100%;
    background-size: cover;
    margin-left: 50px;
    /* margin-left: 80px;
    @media (max-width: 700px) {
      margin-left: 60px;
    } */
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
