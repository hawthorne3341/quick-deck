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
it("Should render new card when card drawn", async () => {
  const drawBtn = screen.getByRole("button", { name: /Draw/ });
  fireEvent.click(drawBtn);

  const reverseCard = await waitFor(() =>
    screen.queryByLabelText(/none_reverse/)
  );

  expect(reverseCard).toBe(null);
});

it("Should render empty message when no cards remain in deck", async () => {
  let cutButton = await waitFor(() =>
    screen.findByRole("button", { name: /Cut/ })
  );
  fireEvent.click(cutButton);

  await waitFor(() => {
    screen.getByLabelText("confirm-cut-dialog");
  });

  fireEvent.input(screen.getByLabelText("card-amount-input"), {
    target: {
      value: 52,
    },
  });
  const cutDeckBtn = screen.getByLabelText("cut-designated-amt-btn");
  fireEvent.click(cutDeckBtn);

  const drawBtn = screen.getByRole("button", { name: /Draw/ });
  fireEvent.click(drawBtn);
  fireEvent.click(drawBtn);

  expect(screen.getByText("No cards remaining")).toBeInTheDocument();
});
