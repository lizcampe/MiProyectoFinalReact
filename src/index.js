import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./shared/routes/AppRoute.routes";

ReactDOM.render(
  <BrowserRouter>
    <AppRoute />
  </BrowserRouter>,
  document.getElementById("root")
);
