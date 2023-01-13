import React, { useEffect, useState } from "react";
import { Geographies, Geography } from "react-simple-maps";
import { useCountries } from "../../hooks/useCountries";
import { ICountry } from "../../types";
import { CountryInformation } from "../CountryInformation/CountryInformation";
import { CustomMarker } from "../CustomMarker/CustomMarker";
import { StyledGeography } from "./style";
const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

export const Map: React.FC = (): JSX.Element => {
  const [countryInformation, setCountryInformation] = useState<ICountry | null>(
    null
  );
  const { getCountries, countries } = useCountries();
  useEffect(() => {
    getCountries({ limit: 10, offset: 0 });
  }, []);

  const renderCountryInformation = countryInformation && (
    <CountryInformation
      onClose={() => setCountryInformation(null)}
      country={countryInformation}
    />
  );

  const markersToRender = countries.map((country) => (
    <CustomMarker
      onSelect={() => setCountryInformation(country)}
      key={country.id}
      latitude={country.latitude}
      longitude={country.longitude}
      flag={country.flag}
    />
  ));
  return (
    <>
      {renderCountryInformation}
      <StyledGeography>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        {markersToRender}
      </StyledGeography>
    </>
  );
};
