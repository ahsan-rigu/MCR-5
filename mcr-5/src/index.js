import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import DataContextProvider from "./contexts/DataContext";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </BrowserRouter>
);
