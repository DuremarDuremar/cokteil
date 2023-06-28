import styled from "styled-components";

export const Content = styled.div`
  /* background: lightgray; */
  margin-right: 11vw;
  margin-top: 11vw;
`;

export const Title = styled.div`
  h3 {
    font-size: 40px;
    font-weight: 300;
    line-height: 87.305%;
  }
`;
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
  /* border: 1px solid black; */
  grid-area: ${(props) => props.area};
  p {
    color: #7d7d7d;
    font-size: 14px;
    line-height: 118%;
    max-width: 184px;
  }
`;
