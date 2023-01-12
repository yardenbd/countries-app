import { ICountry, IPagination } from "../types";
import { useState } from "react";
import * as countryService from "../services/http.service";
export const useCountries = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [error, setError] = useState<boolean>(false);

  const getCountries = async (pagination: IPagination) => {
    const response = await countryService.getCountries(pagination, setError);
    setCountries(response.rows);
    return response.count;
  };
  const getCountriesByName = async (
    pagination: IPagination,
    filterName: string
  ) => {
    const response = await countryService.getCountriesByName(
      pagination,
      filterName,
      setError
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
