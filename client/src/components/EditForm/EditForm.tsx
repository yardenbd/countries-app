import React, { FormEvent, useState } from "react";
import { FormWrapper } from "./style";
import { createPortal } from "react-dom";
import { ICountry } from "../../types";

const domNode = document.getElementById("portal");

interface IEditFormProps {
  country: ICountry;
  setCountryToEdit: React.Dispatch<React.SetStateAction<ICountry | null>>;
  onSubmit: (ev: FormEvent<HTMLFormElement>, countryToEsit: ICountry) => void;
}
export const EditForm: React.FC<IEditFormProps> = ({
  setCountryToEdit,
  country,
  onSubmit,
}): JSX.Element => {
  const [countryDetails, setCountryDetails] = useState<ICountry>(country);
  if (!domNode) return <></>;
  const { code, latitude, longitude, name } = countryDetails;
  const handleChange = (text: string, countryDetail: string) => {
    setCountryDetails((prevState) => {
      return {
        ...prevState,
        [countryDetail]: text,
      };
    });
  };

  return createPortal(
    <FormWrapper
      onSubmit={(ev) => {
        onSubmit(ev, countryDetails);
      }}
    >
      <h2>Edit {country.name}</h2>
      <div className="input-field">
        Name
        <input
          type="text"
          placeholder="name"
          onChange={(ev) => handleChange(ev.target.value, "name")}
          value={name}
        />
      </div>
      <div className="input-field">
        Code
        <input
          type="text"
          placeholder="code"
          maxLength={2}
          minLength={2}
          onChange={(ev) => handleChange(ev.target.value.toUpperCase(), "code")}
          value={code}
        />
      </div>
      <div className="input-field">
        Longitude
        <input
          type="number"
          placeholder="Longitude"
          maxLength={8}
          minLength={2}
          onChange={(ev) => handleChange(ev.target.value, "Longitude")}
          value={longitude}
        />
      </div>
      <div className="input-field">
        Latitude
        <input
          type="number"
          placeholder="Latitude"
          maxLength={8}
          minLength={2}
          onChange={(ev) => handleChange(ev.target.value, "Latitude")}
          value={latitude}
        />
      </div>
      <section className="buttons-section">
        <input type="submit" value={"Submit"} />
        <button onClick={() => setCountryToEdit(null)}>Close</button>
      </section>
    </FormWrapper>,
    domNode
  );
};
