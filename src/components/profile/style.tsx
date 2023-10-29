import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Content = styled.div`
  position: absolute;
  display: flex;
  max-width: 211px;
  height: 148px;
  background: #fffdf5;
  box-shadow: 0px 4px 20px 0px rgba(51, 51, 51, 0.05);
  top: 10%;
  right: 9%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0 24px;
`;

export const Photo = styled.div`
  width: 39px;
  height: 39px;
  background: #c4c4c4;
  border-radius: 50%;
`;
export const Entry = styled(NavLink)`
  width: 100%;
  max-width: 109px;
  height: 26px;
  border: 0.5px solid #514a7e;
  background: #514a7e;
  color: #fffdf5;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: #514a7e;
    background: #fffdf5;
  }
`;
export const Cart = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 12px;
  line-height: 118%;
  cursor: pointer;
  span {
    padding-left: 11px;
  }
`;
