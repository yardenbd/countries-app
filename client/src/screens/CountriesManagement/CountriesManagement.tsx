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
    pageIndex: 0,
    total: 0,
  });

  const {
    getAllCountriesByPage,
    countries,
    getAllCountriesByName,
    deleteCountry,
    updateCountry,
  } = useCountries();

  const getAllCountries = async () => {
    const count = await getAllCountriesByPage(pagination, sortBy);
    setPagination((prevState) => {
      return { ...prevState, total: count };
    });
  };

  const handleSubmit = async (
    ev: FormEvent<HTMLFormElement>,
    editedCountry: Partial<ICountry>
  ) => {
    ev.preventDefault();
    await updateCountry(editedCountry);
    getAllCountries();
  };

  const resetPagination = (count: number) => {
    setPagination({ limit: 15, pageIndex: 0, total: count });
  };

  const handleReset = async () => {
    const count = await getAllCountriesByPage({ limit: 15, pageIndex: 0 });
    resetPagination(count);
  };

  const handleSearchCountry = async () => {
    const count = await getAllCountriesByName(
      { limit: 15, pageIndex: 0 },
      searchTerm,
      sortBy
    );
    resetPagination(count);
  };

  const handleDeleteCountry = async (id: number) => {
    await deleteCountry(id);
    await getAllCountriesByPage({
      limit: pagination.limit,
      pageIndex: pagination.pageIndex,
    });
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
        onPageClick={(pagination) => getAllCountriesByPage(pagination, sortBy)}
        setPagination={setPagination}
        pagination={pagination}
      />
    </Container>
  );
};
