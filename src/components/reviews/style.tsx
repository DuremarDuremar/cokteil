import styled from "styled-components";

export const Content = styled.div`
  margin-top: 8vw;
`;

export const Title = styled.div``;

export const Wrapper = styled.div`
  position: relative;
`;

export const AddReview = styled.div``;

export const ButtonSlider = styled.button<{
  prev?: boolean;
}>`
  width: 92px;
  height: 92px;
  position: absolute;
  right: 0;
  top: 0;
  border: 1px solid #514a7e;
  border-radius: 50%;
  transition: all 0.7s ease-in-out;
  background: #fffdf5;
  svg {
    width: 40px;
    height: 7px;
    position: absolute;
    fill: #514a7e;
    right: 25%;
    top: 50%;
    transform: translateY(-50%);
  }
  &:hover {
    background: #514a7e;

    svg {
      fill: #fffdf5;
    }
  }
  ${(props) =>
    props.prev &&
    `
    svg{
      transform:rotate(180deg);
    }
    `}
`;
