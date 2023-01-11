import React from "react";
import { StyledNavbar } from "./style";
import { NavLink } from "react-router-dom";
export const Navbar: React.FC = (): JSX.Element => {
  return (
    <StyledNavbar>
      <div className="header">
        <h1>Menu</h1>
      </div>
      <NavLink
        to={"countries"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Countries
      </NavLink>
      <NavLink
        to={"world-map"}
        className={({ isActive, isPending }) => (isActive ? "active" : "")}
      >
        World Map
      </NavLink>
    </StyledNavbar>
  );
};
