import { suits, ranks, jokers } from "./constants";

const getOrderedDeck = () =>
  suits
    .map((suit) => ranks.map((rank) => [suit, rank]))
    .reduce((acc, suit) => acc.concat(suit))
    .concat(jokers);

export const shuffleDeck = () => {
  const deckToShuffle = getOrderedDeck();
  let shuffledDeck = [];

  let seed = deckToShuffle.length;
  let getRandomIndex = (seed) => Math.floor(Math.random() * seed);

  deckToShuffle.forEach((card) => {
    let randomIndex = getRandomIndex(seed);

    while (shuffledDeck[randomIndex] != null) {
      randomIndex = getRandomIndex(seed);
    }

    shuffledDeck[randomIndex] = card;
  });

  return shuffledDeck;
};

export const cutDeck = (deck, amount) => deck.splice(amount);

export const drawCard = (deck) => deck.shift();

export const arraysEqual = (arrA, arrB) =>
  Array.isArray(arrA) &&
  Array.isArray(arrB) &&
  arrA.length === arrB.length &&
  arrA.every((elem) => arrB.includes(elem));
