import { IResponse, IPagination, ICountry, SortBy } from "../types";

const URL = "http://localhost:3001/country";

const getAllCountries = async (errorCallback: (isOk: boolean) => void) => {
  const response = await fetch(`${URL}/all`);

  if (!response.ok) {
    errorCallback(!response.ok);
  }

  const parsedResponse = (await response.json()) as IResponse["rows"];
  return parsedResponse;
};

const getAllByPage = async (
  pagination: IPagination,
  errorCallback: (isOk: boolean) => void,
  sortBy: SortBy
) => {
  const { limit, pageIndex } = pagination;
  const fetchUrl = `${URL}?limit=${limit}&pageIndex=${pageIndex}&sortBy=${sortBy}`;
  const response = await fetch(fetchUrl);

  if (!response.ok) {
    errorCallback(!response.ok);
  }

  const parsedResponse = (await response.json()) as IResponse;
  return parsedResponse;
};

const getAllCountriesByName = async (
  pagination: IPagination,
  filterName: string,
  errorCallback: (isOk: boolean) => void,
  sortBy: SortBy
) => {
  const { limit, pageIndex } = pagination;
  const fetchUrl = `${URL}/${filterName}?limit=${limit}&pageIndex=${pageIndex}&sortBy=${sortBy}`;
  const response = await fetch(fetchUrl);
  if (!response.ok) {
    errorCallback(!response.ok);
  }

  const parsedResponse = (await response.json()) as IResponse;
  return parsedResponse;
};

const deleteCountry = async (
  id: number,
  errorCallback: (isOk: boolean) => void
) => {
  const deleteUrl = `${URL}/${id}`;
  const response = await fetch(deleteUrl, { method: "DELETE" });
  if (!response.ok) {
    errorCallback(!response.ok);
  }
  const parsedResponse = await response.json();
  return parsedResponse;
};

const updateCountry = async (countryToEdit: Partial<ICountry>) => {
  const response = await fetch(URL, {
    method: "PATCH",
    body: JSON.stringify(countryToEdit),
    headers: {
      "Content-type": "application/json",
    },
  });
  const parsedResponse = await response.json();
  return parsedResponse;
};

export {
  getAllCountries,
  getAllByPage,
  getAllCountriesByName,
  deleteCountry,
  updateCountry,
};
