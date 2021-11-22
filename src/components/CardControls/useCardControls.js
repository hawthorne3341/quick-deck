import { useMemo } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { shuffleDeck, drawCard, toggleCut, toggleShuffle } from "store/actions";
import {
  selectDeckCut,
  selectFirstCardDrawn,
  selectCardsRemaining,
} from "store/selectors";

const useCardControls = () => {
  const dispatch = useDispatch();

  const deckCut = useSelector(selectDeckCut);
  const firstCardDrawn = useSelector(selectFirstCardDrawn);
  const cardsRemaining = useSelector(selectCardsRemaining);

  const cutDisabled = useMemo(
    () => deckCut || firstCardDrawn,
    [deckCut, firstCardDrawn]
  );
  const drawDisabled = useMemo(() => !!!cardsRemaining, [cardsRemaining]);

  const handleShuffle = () => {
    if (!!(firstCardDrawn || deckCut) && cardsRemaining) {
      dispatch(toggleShuffle());
    } else {
      dispatch(shuffleDeck());
      toast.info("Deck shuffled");
    }
  };

  const handleCut = () => {
    dispatch(toggleCut());
  };

  const handleDraw = () => {
    dispatch(drawCard());
  };

  return {
    cutDisabled,
    drawDisabled,
    handleShuffle,
    handleCut,
    handleDraw,
  };
};

export default useCardControls;
