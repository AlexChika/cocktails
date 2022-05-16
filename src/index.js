import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GeneralContext from "./utils/Context";
ReactDOM.render(
  <React.StrictMode>
    <GeneralContext>
      <App />
    </GeneralContext>
  </React.StrictMode>,
  document.getElementById("root")
);
