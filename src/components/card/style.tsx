import styled from "styled-components";

export const Content = styled.div``;

export const Foto = styled.div``;

export const Details = styled.div`
  height: 81px;
  display: flex;
`;
export const Info = styled.div`
  max-width: 148px;
  flex: 60%;
  font-weight: 400;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  row-gap: 13px;
  p,
  span {
    color: #7d7d7d;
    font-size: 12px;
    font-family: Roboto;
    font-style: normal;
    line-height: normal;
  }
  span {
    font-weight: 300;
    padding-left: 23px;
  }
`;
export const Buy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 40%;
  cursor: pointer;
  svg {
    width: 30px;
    height: 30px;
  }
`;
