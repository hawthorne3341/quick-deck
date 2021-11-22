const selectDeck = (state) => state.deck;

const selectCurrentDeck = (state) => selectDeck(state).currentDeck;
const selectCurrentCard = (state) => selectDeck(state).currentCard;
const selectDeckCut = (state) => selectDeck(state).deckCut;
const selectFirstCardDrawn = (state) => selectDeck(state).firstCardDrawn;
const selectCardsRemaining = (state) => selectDeck(state).cardsRemaining;
const selectShowShuffleModal = (state) => selectDeck(state).showShuffleModal;
const selectShowCutModal = (state) => selectDeck(state).showCutModal;

export {
  selectDeck,
  selectCurrentDeck,
  selectCurrentCard,
  selectDeckCut,
  selectFirstCardDrawn,
  selectCardsRemaining,
  selectShowShuffleModal,
  selectShowCutModal,
};
