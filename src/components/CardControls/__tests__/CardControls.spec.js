import React from "react";
import "regenerator-runtime/runtime";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "App";
import { renderConnected } from "utils/test-helpers";

beforeEach(() => {
  renderConnected(<App />);
});

it("should render all control buttons on startup", () => {
  expect(screen.getByText("Shuffle")).toBeInTheDocument();
  expect(screen.getByText("Cut")).toBeInTheDocument();
  expect(screen.getByText("Draw")).toBeInTheDocument();
});

it.todo(
  "should prompt user if shuffle clicked a second time and deck not yet empty"
);

it.todo("should prompt user to cut cards when Cut clicked");

it.todo(
  "should disable Cut button if cards have been cut but deck not yet empty"
);

it("should disable Cut button if deck has been shuffled and first card has been drawn", async () => {
  // draw card
  const drawBtn = screen.getByRole("button", { name: /Draw/ });
  fireEvent.click(drawBtn);

  // check if reverse card being rendered
  let cutButton = await waitFor(() =>
    screen.findByRole("button", { name: /Cut/ })
  );

  expect(cutButton).toBeDisabled();
});
