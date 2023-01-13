import styled, { css } from "styled-components";

export const reuseableStyle = css`
  border-radius: 10px;
  $border: 1px solid #4d4d4d;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 500px;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px;
`;

export const FormWrapper = styled.form`
  ${reuseableStyle}
  background-color: #e5e5e5;
  gap: 8px;
  input {
    border: $border;
    padding: 8px;
    width: 100%;
  }

  input[type="submit"] {
    border: 1px solid #f5f5f5;
    border-radius: 3px;
    padding: 8px 16px;
    background: #027ad6;
    color: white;
    cursor: pointer;
  }
  .buttons-section {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .input-field {
    display: flex;
    align-items: center;
    gap: 15px;
    width: 100%;
    textarea {
      height: 100px;
      width: 100%;
    }
  }
`;
