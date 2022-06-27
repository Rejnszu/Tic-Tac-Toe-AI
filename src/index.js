import React from "react";
import ReactDOM from "react-dom/client";
import TicProvider from "./store/TicProvider";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TicProvider>
    <App />
  </TicProvider>
);
