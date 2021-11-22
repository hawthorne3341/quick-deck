import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shuffleDeck, drawCard, toggleCut } from "store/actions";
import { selectFirstCardDrawn } from "store/selectors";

const useCardControls = () => {
  const dispatch = useDispatch();

  const firstCardDrawn = useSelector(selectFirstCardDrawn);
  const cutDisabled = useMemo(() => firstCardDrawn, [firstCardDrawn]);

  const handleShuffle = () => {
    // if firstCardDrawn, confirmation dialog
    dispatch(shuffleDeck());
  };

  const handleCut = () => {
    dispatch(toggleCut());
  };

  const handleDraw = () => {
    // draw card from deck
    dispatch(drawCard());
  };

  return {
    cutDisabled,
    handleShuffle,
    handleCut,
    handleDraw,
  };
};

export default useCardControls;
