import React, { useEffect, useState } from "react";
import { Marker } from "react-simple-maps";

interface ICustomMarkerProps {
  longitude: number;
  latitude: number;
  flag: string;
  onSelect: () => void;
}
export const CustomMarker: React.FC<ICustomMarkerProps> = ({
  flag,
  latitude,
  longitude,
  onSelect,
}): JSX.Element => {
  return (
    <Marker onClick={onSelect} coordinates={[longitude, latitude]}>
      <image xlinkHref={flag} width="20" height="30" />
    </Marker>
  );
};
