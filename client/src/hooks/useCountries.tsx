import { ICountry, IPagination } from "../types";
import { useState } from "react";
import * as countryService from "../services/http.service";
export const useCountries = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [error, setError] = useState<boolean>(false);
  const getCountries = async (pagination: IPagination) => {
    const response = await countryService.getCountries(pagination, setError);
    setCountries(response);
  };

  return { getCountries, countries };
};
