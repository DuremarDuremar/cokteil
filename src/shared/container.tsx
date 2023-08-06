import styled from "styled-components";

const Container = styled.div<{
  bc?: string;
  padding?: string;
  mt?: string;
}>`
  background: ${(props) => props.bc};
  margin-top: ${(props) => (props.mt ? props.mt : "150px")};
  padding: ${(props) => (props.padding ? props.padding : "0 8.9%")};
`;

export default Container;
