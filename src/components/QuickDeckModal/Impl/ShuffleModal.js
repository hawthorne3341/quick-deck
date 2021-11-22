import React from "react";
import QuickDeckModal from "../QuickDeckModal";
import { useDispatch, useSelector } from "react-redux";
import { shuffleDeck, toggleShuffle } from "store/actions";
import { selectShowShuffleModal } from "store/selectors";

const CutModal = () => {
  const dispatch = useDispatch();
  const showCutModal = useSelector(selectShowShuffleModal);

  const handleShuffleDeck = () => {
    dispatch(shuffleDeck());
  };

  const handleToggleShuffle = () => {
    dispatch(toggleShuffle());
  };
  const cutModalBody = (
    <>
      <div className="modal-overlay" />
      <div
        className="modal-wrapper"
        role="dialog"
        aria-modal={true}
        aria-hidden={true}
        tabIndex={-1}
      >
        <div className="modal">
          <div className="modal-header">
            <h5 className="modal-title">Confirm Shuffle</h5>
            <span className="modal-description">Proceed with shuffle?</span>
          </div>
          <button onClick={handleShuffleDeck} className="modal-button">
            Cut Deck
          </button>
          <button onClick={handleToggleShuffle} className="modal-button">
            Close
          </button>
        </div>
      </div>
    </>
  );

  return <QuickDeckModal isVisible={showCutModal} modalBody={cutModalBody} />;
};

export default CutModal;
