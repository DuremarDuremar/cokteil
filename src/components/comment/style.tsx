import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 29px;
  gap: 15px;
  width: calc(100% - 120px);
  height: 204px;
  background: #fffdf5;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  @media (max-width: 1361px) {
    width: 100%;
    justify-content: center;
  }

  /* @media (min-width: 1300px) {
    max-width: 459px;
  } */
`;

export const Foto = styled.div`
  min-width: 94px;
  img {
    width: 94px;
    height: 94px;
  }
`;

export const Info = styled.div`
  > div {
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
  }
  p {
    padding: 0 2px;
    max-width: 264px;
    @media (max-width: 1361px) {
      max-width: 664px;
    }
    height: 82px;
    width: 100%;
    overflow-y: auto;
    color: #7d7d7d;
    line-height: 170%;
    font-size: 12px;
    &::-webkit-scrollbar {
      width: 4px;
      background-color: #7d7d7d;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #514a7e;
    }
  }
  h5,
  span {
    font-weight: 400;
    line-height: 170%;
    font-size: 12px;
  }
  span {
    color: #514a7e;
  }
`;
