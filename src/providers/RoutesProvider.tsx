import { BrowserRouter } from "react-router-dom";
import React, { ReactNode } from "react";

const RoutesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
};

export default RoutesProvider;