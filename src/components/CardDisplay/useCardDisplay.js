import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectCurrentDeck, selectCurrentCard } from "store/selectors";

const useCardDisplay = () => {
  const currentCard = useSelector(selectCurrentCard);
  const currentDeck = useSelector(selectCurrentDeck);

  const [suit, rank] = useMemo(() => currentCard, [currentCard]);

  const cardLabel = `${suit}_${rank}`;
  const cardImage = useMemo(
    () => `url('${require(`assets/${suit}/${rank}.svg`)}') no-repeat center`,
    [suit, rank]
  );

  const cardsRemaining = useMemo(() => currentDeck.length > 0, [currentDeck]);

  return { cardLabel, cardImage, cardsRemaining };
};

export default useCardDisplay;
