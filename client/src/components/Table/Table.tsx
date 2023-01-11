import React, { useEffect } from "react";
import { useCountries } from "../../hooks/useCountries";

export const Table: React.FC = (): JSX.Element => {
  const { getCountries, countries } = useCountries();
  useEffect(() => {
    getCountries({ limit: 10, offset: 0 });
  }, []);
  console.log("countries", countries);
  return <table>Table</table>;
};
