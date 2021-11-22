import {
  SHUFFLE_DECK,
  CUT_DECK,
  DRAW_CARD,
  TOGGLE_SHUFFLE,
  SHOW_CUT,
} from "./constants";
import { reverse } from "../utils/constants";
import { shuffleDeck, cutDeck, drawCard } from "../utils/helpers";

const initialState = {
  currentDeck: shuffleDeck(),
  currentCard: reverse,
  deckCut: false,
  firstCardDrawn: false,
  cardsRemaining: true,
  showShuffleModal: false,
  showCutModal: false,
};

export default function deckReducer(state = initialState, action) {
  switch (action.type) {
    case SHUFFLE_DECK:
      return {
        ...state,
        currentDeck: shuffleDeck(),
        currentCard: initialState.currentCard,
        deckCut: initialState.deckCut,
        firstCardDrawn: initialState.firstCardDrawn,
        cardsRemaining: initialState.cardsRemaining,
      };

    case CUT_DECK:
      return {
        ...state,
        deckCut: true,
        currentDeck: cutDeck(state.currentDeck, action.number),
      };

    case DRAW_CARD:
      const drawnCard = drawCard(state.currentDeck);
      return {
        ...state,
        currentCard: drawnCard,
        firstCardDrawn: !!state.firstCardDrawn ? state.firstCardDrawn : true,
        cardsRemaining: !!drawnCard,
      };

    case TOGGLE_SHUFFLE:
      return {
        ...state,
        showShuffleModal: !state.showShuffleModal,
      };

    case SHOW_CUT:
      return {
        ...state,
        showCutModal: !state.showCutModal,
      };

    default:
      return state;
  }
}
