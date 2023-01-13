import React from "react";
import { createPortal } from "react-dom";
const domNode = document.getElementById("portal");

interface IPortalComponent {
  children?: React.ReactNode;
}
export const PortalComponent: React.FC<IPortalComponent> = ({
  children,
}): JSX.Element => {
  if (!domNode) return <></>;
  return createPortal(children, domNode);
};
