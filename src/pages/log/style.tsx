import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  background-color: #514a7e;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div<{
  reg: boolean;
}>`
  background: #fffdf5;
  max-width: ${(props) => (props.reg ? "1101px" : "901px")};
  width: 100%;
  height: 463px;
  display: flex;
  flex-direction: column;
  row-gap: 60px;
  padding: 137px 10vw 84px;
  position: relative;
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 34px;

    input {
      color: #7d7d7d;
      font-size: 16px;
      max-width: 372px;
      width: 100%;
      border-bottom: 1px solid #7d7d7d;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  column-gap: 3vw;
`;

export const Inputs = styled.div`
  display: flex;
  column-gap: 6vw;
`;

export const Button = styled.button<{
  color: string;
  bc: string;
}>`
  max-width: 148px;
  width: 100%;
  height: 37px;
  border: 0.5px solid #514a7e;
  color: ${({ color }) => color};
  background: ${({ bc }) => bc};
  transition: all 0.5s ease-in-out;
  &:hover {
    color: ${({ bc }) => bc};
    background: ${({ color }) => color};
  }
`;

export const NLink = styled(NavLink)`
  width: 47px;
  height: 47px;
  background: #514a7e;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1));
  position: absolute;
  border-radius: 50%;
  right: 10vw;
  top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  svg {
    fill: #fffdf5;
  }
  &:hover {
    background: #fffdf5;
    svg {
      fill: #514a7e;
    }
  }
`;
