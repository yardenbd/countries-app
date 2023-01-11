import React, { useEffect, useState } from "react";
import { EditForm } from "../../components/EditForm/EditForm";
import { Table } from "../../components/Table/Table";
import { useCountries } from "../../hooks/useCountries";
import { ICountry } from "../../types";
import { Container } from "./style";

export const CountriesManagement: React.FC = (): JSX.Element => {
  const [countryToEdit, setCountryToEdit] = useState<ICountry | null>(null);
  console.log("countryToEdit", countryToEdit);
  const renderEditForm = countryToEdit && <EditForm country={countryToEdit} />;
  const { getCountries, countries } = useCountries();
  useEffect(() => {
    getCountries({ limit: 10, offset: 0 });
  }, []);
  return (
    <Container>
      <Table countries={countries} setCountryToEdit={setCountryToEdit} />
      {renderEditForm}
    </Container>
  );
};
