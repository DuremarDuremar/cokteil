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
`;
