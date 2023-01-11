import styled from "styled-components";
export const StyledNavbar = styled.nav`
  height: 100%;
  width: 200px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  border-right: 1px solid #4d4d4d;
  .header {
    background-color: #f5f5f5;

    width: 100%;
    h1 {
      margin: 0;
      padding: 10px;
    }
    border-bottom: 1px solid #4d4d4d;
  }

  a {
    padding: 10px 0px 10px 0px;
    width: 100%;
    text-decoration: none;
    :hover {
      background: lightgray;
    }
    &.active {
      color: blue;
      background: lightgray;
    }
  }
`;
