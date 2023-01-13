import React, { FormEvent, useEffect, useState } from "react";
import { EditForm } from "../../components/EditForm/EditForm";
import { Filter } from "../../components/Filter/Filter";
import { Pagination } from "../../components/Pagintaion/Pagination";
import { Table } from "../../components/Table/Table";
import { useCountries } from "../../hooks/useCountries";
import { ICountry, IPaginationState, SortBy } from "../../types";
import { Container } from "./style";

export const CountriesManagement: React.FC = (): JSX.Element => {
  const [countryToEdit, setCountryToEdit] = useState<ICountry | null>(null);
  const [sortBy, setSortBy] = useState<SortBy>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [pagination, setPagination] = useState<IPaginationState>({
    limit: 15,
    offset: 0,
    pageIndex: 0,
    total: 0,
  });

  const {
    getCountries,
    countries,
    getCountriesByName,
    deleteCountry,
    updateCountry,
  } = useCountries();

  const handleSubmit = async (
    ev: FormEvent<HTMLFormElement>,
    editedCountry: Partial<ICountry>
  ) => {
    ev.preventDefault();
    await updateCountry(editedCountry);
    await getCountries({ limit: pagination.limit, offset: pagination.offset });
  };

  const getAllCountries = () => {
    getCountries(pagination, sortBy).then((count) =>
      setPagination((prevState) => {
        return { ...prevState, total: count };
      })
    );
  };

  const resetPagination = (count: number) => {
    setPagination({ limit: 15, offset: 0, pageIndex: 1, total: count });
  };

  const handleReset = async () => {
    const count = await getCountries({ limit: 15, offset: 0 });
    resetPagination(count);
  };

  const handleSearchCountry = async () => {
    const count = await getCountriesByName(
      { limit: 15, offset: 0 },
      searchTerm,
      sortBy
    );
    resetPagination(count);
  };

  const handleDeleteCountry = async (id: number) => {
    await deleteCountry(id);
    await getCountries({ limit: pagination.limit, offset: pagination.offset });
  };

  const renderEditForm = countryToEdit && (
    <EditForm
      onSubmit={handleSubmit}
      setCountryToEdit={setCountryToEdit}
      country={countryToEdit}
    />
  );

  useEffect(() => {
    if (searchTerm) {
      handleSearchCountry();
      return;
    }
    getAllCountries();
  }, [sortBy]);

  return (
    <Container>
      <Filter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onReset={handleReset}
        onClick={handleSearchCountry}
      />
      <Table
        setSortBy={setSortBy}
        deleteCountry={handleDeleteCountry}
        countries={countries}
        setCountryToEdit={setCountryToEdit}
      />
      {renderEditForm}
      <Pagination
        onPageClick={(pagination) => getCountries(pagination, sortBy)}
        setPagination={setPagination}
        pagination={pagination}
      />
    </Container>
  );
};
