import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectCurrentCard, selectCardsRemaining } from "store/selectors";

const useCardDisplay = () => {
  const currentCard = useSelector(selectCurrentCard);
  const cardsRemaining = useSelector(selectCardsRemaining);
  debugger;

  const [suit, rank] = useMemo(() => currentCard || [], [currentCard]);

  const cardLabel = `${suit}_${rank}`;
  const cardImage = useMemo(
    () =>
      suit &&
      rank &&
      `url('${require(`assets/${suit}/${rank}.svg`)}') no-repeat center`,
    [suit, rank]
  );

  // const cardsRemaining = useMemo(() => !!currentCard, [currentCard]);

  return { cardLabel, cardImage, cardsRemaining };
};

export default useCardDisplay;
