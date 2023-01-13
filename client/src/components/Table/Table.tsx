import React from "react";
import { ICountry, SortBy, TableHeaders } from "../../types";
import { DynamicElement } from "../DynamicElement/DynamicElement";
import { Container, RowContainer, TableHeader, TableRow } from "./style";

interface ITableProps {
  setCountryToEdit: React.Dispatch<React.SetStateAction<ICountry | null>>;
  countries: ICountry[];
  deleteCountry: (id: number) => void;
  setSortBy: React.Dispatch<React.SetStateAction<SortBy>>;
}

export const Table: React.FC<ITableProps> = ({
  countries,
  setCountryToEdit,
  deleteCountry,
  setSortBy,
}): JSX.Element => {
  const tableHeaders: TableHeaders[] = ["name", "code", "flag", "action"];

  const tableHeadersToRender = tableHeaders.map((th) => {
    const renderSortingButtons = (th === "name" || th === "code") && (
      <div className="header">
        <button onClick={() => setSortBy([th, "ASC"])}>
          <i className="fa-solid fa-caret-up"></i>
        </button>
        <button onClick={() => setSortBy([th, "DESC"])}>
          <i className="fa-solid fa-caret-down"></i>
        </button>
      </div>
    );
    return (
      <RowContainer key={th}>
        <span className="table-header">{th}</span>
        {renderSortingButtons}
      </RowContainer>
    );
  });

  const tableRowsToRender = countries.map((country) => (
    <TableRow key={country.id}>
      {tableHeaders.map((th) => {
        const content = country[th as keyof typeof country];
        return (
          <RowContainer key={th}>
            <DynamicElement
              onEdit={() => setCountryToEdit(country)}
              onDelete={() => deleteCountry(country.id)}
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
