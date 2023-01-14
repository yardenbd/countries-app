import { ICountry } from "./types";

const isCountryInterface = (object: Object): object is ICountry => {
  return (
    Object.prototype.hasOwnProperty.call(object, "name") &&
    Object.prototype.hasOwnProperty.call(object, "flag") &&
    Object.prototype.hasOwnProperty.call(object, "code") &&
    Object.prototype.hasOwnProperty.call(object, "id") &&
    Object.prototype.hasOwnProperty.call(object, "longitude") &&
    Object.prototype.hasOwnProperty.call(object, "latitude")
  );
};

export const elementCreator = (
  country: Object,
  setCountryInformation: (country: ICountry) => void
) => {
  const isConutry = isCountryInterface(country);
  if (!isConutry) return document.createElement("img");
  const image = document.createElement("img");
  image.src = country.flag;
  image.style.width = "20px";
  image.style.width = "20px";
  image.style.pointerEvents = "auto";
  image.style.cursor = "pointer";
  image.onclick = () => setCountryInformation(country);
  return image as HTMLElement;
};
