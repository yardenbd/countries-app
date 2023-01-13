import styled from "styled-components";
import { reuseableStyle } from "../EditForm/style";

export const Container = styled.div`
  ${reuseableStyle}
  background-color: white;
  gap: 20px;
  .header-section {
    display: flex;
    align-items: center;
    align-self: flex-start;
    justify-content: space-evenly;
    width: 100%;

    h1 {
      margin: 0;
      color: #070d0d;
    }
    img {
      width: 100px;
      height: 100px;
    }
  }
  button {
    border: $border;
    padding: 8px 16px;
    cursor: pointer;
  }
`;

export const Description = styled.section`
  align-self: flex-start;
  color: #070d0d;
  div {
    display: flex;
    flex-direction: column;
  }
`;

export const TextElement = styled.span`
  font-size: 20px;
`;
