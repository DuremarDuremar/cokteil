import styled from "styled-components";

const Container = styled.div<{
  bc?: string;
  padding?: string;
  mt?: string;
}>`
  background: ${(props) => props.bc};
  margin-top: ${(props) => (props.mt ? props.mt : "150px")};
  padding: ${(props) => (props.padding ? props.padding : "0 8.9%")};
  @media (max-width: 631px) {
    padding: ${(props) => (props.padding ? props.padding : "0 10px")};
  }
`;

export default Container;
