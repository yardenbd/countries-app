import { ICountry, IPagination, SortBy } from "../types";
import { useState } from "react";
import * as countryService from "../services/http.service";
export const useCountries = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [error, setError] = useState<boolean>(false);

  const getAllCountries = async () => {
    const response = await countryService.getAllCountries(setError);
    setCountries(response);
  };

  const getAllCountriesByPage = async (
    pagination: IPagination,
    sortBy?: SortBy
  ) => {
    const response = await countryService.getAllByPage(
      pagination,
      setError,
      sortBy || []
    );
    setCountries(response.rows);
    return response.count;
  };
  const getAllCountriesByName = async (
    pagination: IPagination,
    filterName: string,
    sortBy?: SortBy
  ) => {
    const response = await countryService.getAllCountriesByName(
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
    getAllCountriesByPage,
    deleteCountry,
    getAllCountries,
    countries,
    error,
    getAllCountriesByName,
    updateCountry,
  };
};
