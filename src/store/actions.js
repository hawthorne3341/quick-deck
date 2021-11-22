import {
  SHUFFLE_DECK,
  CUT_DECK,
  DRAW_CARD,
  TOGGLE_SHUFFLE,
  SHOW_CUT,
} from "./constants";

export function shuffleDeck() {
  return {
    type: SHUFFLE_DECK,
  };
}

export function cutDeck(number) {
  return {
    type: CUT_DECK,
    number,
  };
}

export function drawCard() {
  return {
    type: DRAW_CARD,
  };
}

export function toggleShuffle() {
  return {
    type: TOGGLE_SHUFFLE,
  };
}

export function toggleCut() {
  return {
    type: SHOW_CUT,
  };
}
