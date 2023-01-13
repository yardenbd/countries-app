import React, { useState } from "react";
import { Button } from "../reuseableStyle";
import { Container } from "./style";

interface IFilterProps {
  onClick: () => void;
  onReset: () => void;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchTerm: string;
}
export const Filter: React.FC<IFilterProps> = ({
  onClick,
  onReset,
  searchTerm,
  setSearchTerm,
}): JSX.Element => {
  return (
    <Container>
      <input
        type={"text"}
        value={searchTerm}
        onChange={(ev) => setSearchTerm(ev.target.value)}
      />
      <Button onClick={onClick}>Search</Button>
      <Button
        onClick={() => {
          onReset();
          setSearchTerm("");
        }}
      >
        Reset Search
      </Button>
    </Container>
  );
};
