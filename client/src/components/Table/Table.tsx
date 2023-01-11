import React, { useEffect } from "react";
import { useCountries } from "../../hooks/useCountries";
import { ICountry } from "../../types";
import { DynamicElement } from "../DynamicElement/DynamicElement";
import { Container, RowContainer, TableHeader, TableRow } from "./style";

interface ITableProps {
  setCountryToEdit: React.Dispatch<React.SetStateAction<ICountry | null>>;
  countries: ICountry[];
}

export const Table: React.FC<ITableProps> = ({
  countries,
  setCountryToEdit,
}): JSX.Element => {
  const tableHeaders = Object.keys(countries[0] || {});
  tableHeaders.push("action");
  const tableHeadersToRender = tableHeaders.map((th) => (
    <RowContainer key={th}>
      <span className="table-header">{th}</span>
    </RowContainer>
  ));
  const tableRowsToRender = countries.map((country) => (
    <TableRow key={country.code}>
      {tableHeaders.map((th) => {
        const content = country[th as keyof typeof country];
        return (
          <RowContainer key={th}>
            <DynamicElement
              onEdit={() => setCountryToEdit(country)}
              onDelete={() => {}}
              tableHeader={th}
              content={content}
            />
          </RowContainer>
        );
      })}
    </TableRow>
  ));

  return (
    <Container>
      <div className="table">
        <TableHeader>{tableHeadersToRender}</TableHeader>
        <div className="table-content">{tableRowsToRender}</div>
      </div>
    </Container>
  );
};
