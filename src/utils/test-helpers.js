import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "../configureStore";

// Source:
// https://codesandbox.io/s/github/kentcdodds/react-testing-library-examples?file=/src/__tests__/react-redux.js
export const renderConnected = (
  ui,
  { initialState, store = configureStore(), ...renderOptions } = {}
) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};
