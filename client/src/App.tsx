import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { AppRoutes } from "./routes/AppRoutes";
import { AppWrapper } from "./style";

const App: React.FC = (): JSX.Element => {
  return (
    <AppWrapper>
      <AppRoutes />
    </AppWrapper>
  );
};

export default App;
