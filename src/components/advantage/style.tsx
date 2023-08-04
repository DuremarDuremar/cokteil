import styled from "styled-components";

export const Content = styled.section`
  margin-right: 11vw;
`;

// export const Title = styled.div`
//   h3 {
//     font-size: 40px;
//     font-weight: 300;
//     line-height: 87.305%;
//   }
// `;

export const Grid = styled.div`
  margin-top: 93px;
  display: grid;
  grid-template-areas:
    "a b c d"
    "z z x x";
  gap: 7vw;
  min-height: 236px;
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
