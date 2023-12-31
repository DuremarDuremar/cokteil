import styled from "styled-components";

export const Content = styled.section``;

export const Wrapper = styled.div`
  margin-top: 6vw;
  position: relative;

  .alice-carousel__wrapper ul {
    li {
      @media (max-width: 800px) {
        max-width: 70vw;
        width: 100%;
        background-size: cover;
        /* margin-left: 20px; */
      }
    }
  }
`;

export const AddReview = styled.div`
  margin-top: 30px;
  button {
    width: 148px;
    height: 37px;
    border: 0.5px solid #514a7e;
    background: #514a7e;
    color: #fffdf5;
    font-size: 14px;
    font-weight: 400;
    transition: all 0.4s ease-in;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const ButtonSlider = styled.button`
  width: 92px;
  height: 92px;
  position: absolute;
  right: -5%;
  top: 50%;
  transform: translateY(-50%);
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
`;
