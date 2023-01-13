import { ICountry, IPagination, SortBy } from "../types";
import { useState } from "react";
import * as countryService from "../services/http.service";
export const useCountries = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [error, setError] = useState<boolean>(false);

  const getCountries = async (pagination: IPagination, sortBy?: SortBy) => {
    const response = await countryService.getCountries(
      pagination,
      setError,
      sortBy || []
    );
    setCountries(response.rows);
    return response.count;
  };
  const getCountriesByName = async (
    pagination: IPagination,
    filterName: string,
    sortBy?: SortBy
  ) => {
    const response = await countryService.getCountriesByName(
      pagination,
      filterName,
      setError,
      sortBy || []
    );
    setCountries(response.rows);
    return response.count;
  };
  const deleteCountry = async (id: number) => {
    await countryService.deleteCountry(id, setError);
  };

  const updateCountry = async (countryToUpdate: Partial<ICountry>) => {
    await countryService.updateCountry(countryToUpdate);
  };

  return {
    getCountries,
    deleteCountry,
    countries,
    error,
    getCountriesByName,
    updateCountry,
  };
};
