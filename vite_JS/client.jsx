import React from "react";
import ReactDOM from "react-dom/client";

import App from "@layouts/App";

const rootElement = document.querySelector("#app");

if (!rootElement) throw new Error("Failed to find the root element");

const a = "";

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
