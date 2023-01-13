import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-bottom: auto;
  .table {
    border: 1px solid #eeeeee;
  }
  .table-content {
    overflow-y: auto;
    max-height: 80vh;
  }
`;

export const RowContainer = styled.div`
  text-align: center;
  flex: 1 1 20%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  .table-header {
    color: white;
    display: inline-block;
    text-transform: capitalize;
  }
  .header {
    button {
      background: transparent;
      border: none;
      height: 8px;
      i {
        color: white;
      }
      cursor: pointer;
    }
    margin-bottom: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const TableRow = styled.div`
  display: flex;
  width: 100%;
  .image {
    width: 40px;
    height: 40px;
  }
`;

export const TableHeader = styled.div`
  $base-spacing-unit: 24px;
  $half-spacing-unit: $base-spacing-unit / 2;
  display: flex;
  width: 100%;
  background: #000;
  padding: ($half-spacing-unit * 1.5) 0;
`;
