import styled from "styled-components";

export const Content = styled.div`
  margin-top: 9vw;
  /* background: lightgray; */
`;

export const Title = styled.div`
  h3 {
    font-size: 40px;
    font-weight: 300;
    line-height: 87.305%;
    position: relative;
    display: inline;
    :before {
      content: "Акции";
      display: block;
      position: absolute;
      color: #514a7e;
      font-size: 40px;
      font-family: Bad Script;
      line-height: 87.305%;
      right: -120px;
      bottom: -20px;
    }
  }
`;

export const Wrapper = styled.div`
  margin-top: 8vw;
  position: relative;
  > div {
    width: 111%;
  }
  li {
    max-width: 278px;
    height: 319px;
    width: 100%;
    background-size: cover;
    box-shadow: 0px 4px 10px 0px rgba(81, 74, 126, 0.2);
  }
  li:not(:first-child) {
    margin-left: 80px;
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
  ${(props) =>
    props.prev &&
    `
    left:0%;
    bottom: 5%;
    svg{
      transform:rotate(180deg);
    }
    `}
  ${(props) =>
    !props.prev &&
    `
  right:-11%;
  bottom: 5%;
    `}
&:hover {
    background: #514a7e;

    svg {
      fill: #fffdf5;
    }
  }
`;
