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

it("Should prompt before reshuffle after card drawn", async () => {
  // draw card
  const drawBtn = screen.getByRole("button", { name: /Draw/ });
  fireEvent.click(drawBtn);

  // check if reverse card being rendered
  let reverseCard = await waitFor(() =>
    screen.queryByLabelText(/none_reverse/)
  );

  // different card should be being rendered
  expect(reverseCard).toBe(null);

  // click shuffle button
  const shuffleBtn = screen.getByRole("button", { name: /Shuffle/ });
  fireEvent.click(shuffleBtn);

  // shuffle confirm dialog will be present
  await waitFor(() => {
    expect(
      screen.getByLabelText("confirm-reshuffle-dialog")
    ).toBeInTheDocument();
  });
});

it("Should prompt before cut deck", async () => {
  const cutBtn = screen.getByRole("button", { name: /Cut/ });
  fireEvent.click(cutBtn);

  // shuffle confirm dialog will be present
  await waitFor(() => {
    expect(screen.getByLabelText("confirm-cut-dialog")).toBeInTheDocument();
  });
});

it("should disable Cut button if cards have been cut but deck not yet empty", async () => {
  let cutButton = await waitFor(() =>
    screen.findByRole("button", { name: /Cut/ })
  );
  fireEvent.click(cutButton);

  await waitFor(() => {
    expect(screen.getByLabelText("confirm-cut-dialog")).toBeInTheDocument();
  });

  fireEvent.input(screen.getByLabelText("card-amount-input"), {
    target: {
      value: 10,
    },
  });
  const cutDeckBtn = screen.getByLabelText("cut-designated-amt-btn");
  fireEvent.click(cutDeckBtn);

  await waitFor(() => expect(cutButton).toBeDisabled());
});

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
