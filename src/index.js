import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import configureStore from "./configureStore";
import "./app.scss";

render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById("app")
);
