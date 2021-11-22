import React from "react";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import configureStore from "./configureStore";
import "./app.scss";

render(
  <Provider store={configureStore()}>
    <App />
    <ToastContainer autoClose={1000} transition={Slide} hideProgressBar />
  </Provider>,
  document.getElementById("app")
);
