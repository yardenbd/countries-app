import React from "react";
import { ICountry } from "../../types";
import { PortalComponent } from "../PortalComponent/PortalComponent";
import { Button } from "../reuseableStyle";
import { Container, Description, TextElement } from "./style";

interface ICountryInformationProps {
  country: ICountry;
  onClose: () => void;
}
export const CountryInformation: React.FC<ICountryInformationProps> = ({
  onClose,
  country,
}): JSX.Element => {
  const { code, flag, latitude, longitude, name, description } = country;
  return (
    <PortalComponent>
      <Container>
        <section className="header-section">
          <h1>{name}</h1>
          <img src={flag} alt="flag.svg" />
        </section>
        <Description>
          <div>
            <TextElement>
              {name}'s code is : {code}
            </TextElement>
            <TextElement>
              she has {latitude} latitude and {longitude} longitude
            </TextElement>
            <TextElement> {description} </TextElement>
          </div>
        </Description>
        <Button onClick={onClose}>Close</Button>
      </Container>
    </PortalComponent>
  );
};
