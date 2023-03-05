import styled from "styled-components";

export const HeaderBox = styled.div``;
export const Header = styled.div`
  display: flex;
  background-color: #fcd5da;
  align-content: center;
  justify-content: space-between;
  cursor: pointer;
`;
export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  color: white;
  h2 {
    margin-left: 50px;
  }
  P {
    margin-left: 40px;
  }
`;
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: white;
  .logout {
    margin-right: 40px;
  }
`;
