import { ICountry, IPagination } from "../types";

const URL = "http://localhost:3001/country";

const getCountries = async (
  pagination: IPagination,
  errorCallback: (isOk: boolean) => void
) => {
  const { limit, offset } = pagination;
  const fetchUrl = `${URL}?limit=${limit}&offset=${offset}`;
  const response = await fetch(fetchUrl);

  if (!response.ok) {
    errorCallback(!response.ok);
  }

  const parsedResponse = await response.json();
  console.log("parsedResponse", parsedResponse);

  return [];
};

export { getCountries };
