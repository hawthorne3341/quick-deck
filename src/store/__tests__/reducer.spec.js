import "regenerator-runtime/runtime";
import * as deckActions from "store/actions";
import configureStore from "configureStore";
import { arraysEqual } from "utils/helpers";
import { reverse } from "utils/constants";

let fakeStore;
beforeEach(() => {
  fakeStore = configureStore();
});

const deckState = (slice) => fakeStore.getState().deck[slice];

// is there a way to make this test deterministic? Chance
// of it failing is 1 in 52!, but still
it("should shuffle cards on shuffle", async () => {
  const deckBeforeShuffle = deckState("currentDeck");
  await fakeStore.dispatch(deckActions.shuffleDeck());
  const deckAfterShuffle = deckState("currentDeck");

  expect(arraysEqual(deckBeforeShuffle, deckAfterShuffle)).toBe(false);
  expect(deckState("firstCardDrawn")).toBe(false);
  expect(deckState("deckCut")).toBe(false);
});

it("should cut x cards on cut", async () => {
  // arr.slice(0) to get by value and not reference
  // https://stackoverflow.com/a/9190591
  const deckBeforeCut = deckState("currentDeck").slice(0);

  await fakeStore.dispatch(deckActions.cutDeck(26));
  const deckAfterCut = deckState("currentDeck").slice(0);

  expect(arraysEqual(deckAfterCut, deckBeforeCut.splice(26))).toBe(true);
  expect(deckState("deckCut")).toBe(true);
});

it("should draw next card on draw", async () => {
  await fakeStore.dispatch(deckActions.drawCard());

  expect(deckState("currentCard")).not.toEqual(reverse);
  expect(deckState("firstCardDrawn")).toBe(true);
});

it("should toggle showCutModal", async () => {
  expect(deckState("showCutModal")).toBe(false);
  await fakeStore.dispatch(deckActions.toggleCut());
  expect(deckState("showCutModal")).toBe(true);
  await fakeStore.dispatch(deckActions.toggleCut());
  expect(deckState("showCutModal")).toBe(false);
});

it("should toggle showShuffleModal", async () => {
  expect(deckState("showShuffleModal")).toBe(false);
  await fakeStore.dispatch(deckActions.toggleShuffle());
  expect(deckState("showShuffleModal")).toBe(true);
  await fakeStore.dispatch(deckActions.toggleShuffle());
  expect(deckState("showShuffleModal")).toBe(false);
});

it("cardsRemaining should be false if no cards left in deck", async () => {
  await fakeStore.dispatch(deckActions.cutDeck(52));
  await fakeStore.dispatch(deckActions.drawCard());
  await fakeStore.dispatch(deckActions.drawCard());

  expect(deckState("cardsRemaining")).toBe(false);
});
