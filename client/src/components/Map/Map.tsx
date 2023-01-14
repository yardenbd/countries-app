import React, { useEffect, useState } from "react";
import { useCountries } from "../../hooks/useCountries";
import { ICountry } from "../../types";
import { CountryInformation } from "../CountryInformation/CountryInformation";
import Globe from "react-globe.gl";
import { elementCreator } from "../../utils";
const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

export const Map: React.FC = (): JSX.Element => {
  const [countryInformation, setCountryInformation] = useState<ICountry | null>(
    null
  );
  const { getAllCountries, countries } = useCountries();
  useEffect(() => {
    getAllCountries();
  }, []);

  const renderCountryInformation = countryInformation && (
    <CountryInformation
      onClose={() => setCountryInformation(null)}
      country={countryInformation}
    />
  );

  return (
    <>
      {renderCountryInformation}
      <Globe
        width={window.innerWidth - 200}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        htmlElementsData={countries}
        htmlLat={(d) => {
          if ("latitude" in d && typeof d.latitude === "number") {
            return d.latitude;
          } else return 0;
        }}
        htmlLng={(d) => {
          if ("longitude" in d && typeof d.longitude === "number") {
            return d.longitude;
          } else return 0;
        }}
        htmlElement={(d) => elementCreator(d, setCountryInformation)}
      />
    </>
  );
};

const t: HTMLElement | null = document.getElementById("");
