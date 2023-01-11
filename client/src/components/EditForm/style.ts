import styled from "styled-components";

export const FormWrapper = styled.form`
  border-radius: 10px;
  $border: 1px solid #4d4d4d;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 500px;
  transform: translate(-50%, -50%);
  background-color: #e5e5e5;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 30px;
  flex-direction: column;
  input {
    border: $border;
    padding: 8px;
    width: 100%;
  }

  input[type="submit"] {
    padding: 8px 16px;
  }
  .buttons-section {
    display: flex;
    align-items: center;
    gap: 5px;
    button {
      border: $border;
      padding: 8px 16px;
    }
  }
`;
