import styled from "styled-components";

export const Content = styled.div`
  margin-top: 40px;

  /* display: flex;
align-items: center;
justify-content: center;
height: 100vh;
flex-direction: column;
gap: 20px; */

  .sign {
    font-size: 25px;
  }
  .accordian {
    /* width: 300px;
  border: 1px solid rgb(133, 133, 133); */
  }
  .accordian-header {
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 15px;
    border: 2px solid rgb(133, 133, 133);
    background-color: rgb(255, 255, 143);
  }
  .accordian-body {
    padding: 15px 5px;
  }
`;
