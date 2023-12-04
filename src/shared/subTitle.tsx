import styled from "styled-components";

const SubTitle = styled.div<{
  content?: string;
  right?: string;
  left?: string;
}>`
  @media (max-width: 631px) {
    text-align: center;
  }
  h3 {
    font-size: 40px;
    @media (max-width: 700px) {
      font-size: 25px;
    }
    font-weight: 300;
    line-height: 87.305%;
    position: relative;
    display: inline;
    :before {
      content: "${(props) => props.content}";
      display: block;
      position: absolute;
      color: #514a7e;
      font-size: 40px;
      font-family: Bad Script;
      line-height: 87.305%;
      right: -120px;
      bottom: -20px;
      @media (max-width: 631px) {
        font-size: 25px;
        right: -2vw;
        bottom: -30px;
      }
    }
  }
`;

export default SubTitle;
