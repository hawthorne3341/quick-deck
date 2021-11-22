import React from "react";
import "regenerator-runtime/runtime";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "App";
import { renderConnected } from "utils/test-helpers";

beforeEach(() => {
  renderConnected(<App />);
});

it("Should render card reverse on startup", () => {
  expect(screen.getByLabelText(/none_reverse/)).toBeInTheDocument();
});

// just validate that it is not rendering reverse, but a different card
it("Should render next card when active card value changes", async () => {
  const drawBtn = screen.getByRole("button", { name: /Draw/ });
  fireEvent.click(drawBtn);

  const reverseCard = await waitFor(() =>
    screen.queryByLabelText(/none_reverse/)
  );

  expect(reverseCard).toBe(null);
});

it("Should render card reverse after deck shuffle", async () => {
  // draw card
  const drawBtn = screen.getByRole("button", { name: /Draw/ });
  fireEvent.click(drawBtn);

  // check if reverse card being rendered
  let reverseCard = await waitFor(() =>
    screen.queryByLabelText(/none_reverse/)
  );

  // different card should be being rendered
  expect(reverseCard).toBe(null);

  // shuffle deck
  const shuffleBtn = screen.getByRole("button", { name: /Shuffle/ });
  fireEvent.click(shuffleBtn);

  reverseCard = await waitFor(() => screen.queryByLabelText(/none_reverse/));

  // reverse card should be being rendered
  expect(reverseCard).toBeInTheDocument();
});

it.todo("Should render empty message when no cards remain in deck");
