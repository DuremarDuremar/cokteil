import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { ReactComponent as SvgArrow } from "../assets/arrowLit.svg";

const Content = styled.div`
  width: 76px;
  height: 90px;
  @media (max-width: 1410px) {
    width: 66px;
    height: 80px;
  }
  background: #fffdf5;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  border-radius: 5px;
`;

const ToTop = styled(Link)`
  width: 72px;
  height: 72px;
  @media (max-width: 1410px) {
    width: 62px;
    height: 62px;
  }
  background: #514a7e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.7s ease-in-out;
  cursor: pointer;
  visibility: hidden;
  opacity: 0;
  &.active {
    visibility: visible;
    opacity: 1;
  }
  svg {
    fill: #fffdf5;
    rotate: -90deg;
    height: 6px;
    cursor: pointer;
    transition: all 0.7s ease-in-out;
  }
  &:hover {
    background: #fffdf5;

    svg {
      fill: #514a7e;
    }
  }
`;

const ScrollToTop = () => {
  return (
    <Content>
      <ToTop
        activeClass="active"
        to="noscroll"
        spy={true}
        smooth={true}
        offset={-150}
        duration={500}
      >
        <SvgArrow />
      </ToTop>
    </Content>
  );
};

export default ScrollToTop;
