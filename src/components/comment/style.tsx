import styled from "styled-components";

export const Content = styled.div`
  display: flex;
`;

export const Foto = styled.div`
  img {
    width: 94px;
    height: 94px;
  }
`;

export const Info = styled.div`
  > div {
    display: flex;
  }
  p {
    max-width: 264px;
    height: 70px;
    width: 100%;
    overflow-y: auto;
  }
`;
