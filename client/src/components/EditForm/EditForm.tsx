import React from "react";
import { FormWrapper } from "./style";
import { createPortal } from "react-dom";
import { ICountry } from "../../types";

const domNode = document.getElementById("portal");

interface IEditFormProps {
  country: ICountry;
}
export const EditForm: React.FC<IEditFormProps> = ({
  country,
}): JSX.Element => {
  if (!domNode) return <></>;
  const { code, flag, latitude, longitude, name } = country;
  return createPortal(
    <FormWrapper>
      <h2>Edit {country.name}</h2>
      <input
        type="text"
        placeholder="name"
        onChange={(ev) => {}}
        value={name}
      />
      <input
        type="text"
        placeholder="flag"
        onChange={(ev) => {}}
        value={flag}
      />
      <input
        type="text"
        placeholder="code"
        onChange={(ev) => {}}
        value={code}
      />
      <input
        type="number"
        placeholder="Longitude"
        onChange={(ev) => {}}
        value={longitude}
      />
      <input
        type="number"
        placeholder="Latitude"
        onChange={(ev) => {}}
        value={latitude}
      />
      <section className="buttons-section">
        <input type="submit" value={"Submit"} />
        <button>Close</button>
      </section>
    </FormWrapper>,
    domNode
  );
};
