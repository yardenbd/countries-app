import React, { useState } from "react";
import { Container } from "./style";

interface IFilterProps {
  onClick: (countryFilterName: string) => void;
  onReset: () => void;
}
export const Filter: React.FC<IFilterProps> = ({
  onClick,
  onReset,
}): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  return (
    <Container>
      <input
        type={"text"}
        value={searchTerm}
        onChange={(ev) => setSearchTerm(ev.target.value)}
      />
      <button onClick={() => onClick(searchTerm)}>Search</button>
      <button
        onClick={() => {
          onReset();
          setSearchTerm("");
        }}
      >
        Reset Search
      </button>
    </Container>
  );
};
