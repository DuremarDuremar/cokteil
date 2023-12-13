import styled from "styled-components";

export const Content = styled.section`
  @media (min-width: 631px) {
    margin-right: 10vw;
  }
`;

export const Grid = styled.div`
  margin-top: 93px;

  @media (max-width: 630px) {
    margin-right: 40px;
    position: relative;
  }

  @media (min-width: 631px) {
    min-height: 236px;
    display: grid;
    grid-template-areas:
      "a b c d"
      "z z x x";
    gap: 7vw;
  }
`;

export const Item = styled.div<{
  area: string;
}>`
  grid-area: ${(props) => props.area};
  p {
    color: #7d7d7d;
    font-size: 14px;
    line-height: 118%;
    max-width: 184px;
    position: relative;
  }

  ${(props) =>
    props.area === "a" &&
    `
    p {
      :before {
      content: "";
      display:block;
      position: absolute;
      right:2vw;
      bottom:-25px;
      width: 28px;
      height: 28px;
      border-radius: 28px;
      background: #514A7E;
      box-shadow: 0px 4px 10px 0px rgba(81, 74, 126, 0.40);  
    }    
    `}
  ${(props) =>
    props.area === "c" &&
    `
    p {
      :before {
      content: "";
      display:block;
      position: absolute;
      right:-50px;
      top:-30px;
      width: 47px;
      height: 47px;
      border-radius: 47px;
      background: #514A7E;
      box-shadow: 0px 4px 10px 0px rgba(81, 74, 126, 0.40);  
    }    
    `}

  ${(props) =>
    props.area === "z" &&
    `
        margin: 0px auto;
    p {
      :before {
      content: "";
      display:block;
      position: absolute;
      right:-30px;
      bottom:-25px;
      width: 47px;
      height: 47px;
      border-radius: 47px;
      background: #514A7E;
      box-shadow: 0px 4px 10px 0px rgba(81, 74, 126, 0.40);  
    }    
    `}
  ${(props) =>
    props.area === "x" &&
    `
        margin: 0px auto;
    p {
      :before {
      content: "";
      display:block;
      position: absolute;
      right:-8px;
      top:-27px;
      width: 28px;
      height: 28px;
      border-radius: 28px;
      background: #514A7E;
      box-shadow: 0px 4px 10px 0px rgba(81, 74, 126, 0.40);  
    }    
}
    `}
`;

export const Card = styled.div`
  border-radius: 10px;
  background: #514a7e;
  max-width: 150px;
  width: 100%;
  height: 78px;
  margin: 0px auto;
  display: flex;
  align-items: center;
  p {
    color: #fffdf5;
    text-align: center;
    font-size: 14px;
    line-height: 118%;
  }
`;

export const Btn = styled.div`
  width: 30px;
  height: 30px;
  background-color: #fffdf5;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 24px;
  right: -30px;
  cursor: pointer;
  svg {
    fill: #514a7e;
    /* width: 16px; */
  }
`;
