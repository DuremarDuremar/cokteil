import styled from "styled-components";

export const Content = styled.div`
  border-bottom: 1px solid #7d7d7d;
`;

export const Header = styled.div`
  height: 55px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;

  > div:last-child {
    width: 20px;
    height: 20px;
    color: #514a7e;
  }
`;

export const Body = styled.div`
  padding: 15px 5px;
  ul {
    max-width: 200px;
    width: 100%;
  }
`;

export const Corner = styled.div<{
  show: boolean;
}>`
  width: 10px;
  height: 10px;
  transform: ${({ show }) => show && "rotate(180deg)"};
  margin-left: 20px;
`;
