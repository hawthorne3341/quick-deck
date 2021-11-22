import React from "react";
import { toast } from "react-toastify";
import QuickDeckModal from "../QuickDeckModal";
import { useDispatch, useSelector } from "react-redux";
import { shuffleDeck, toggleShuffle } from "store/actions";
import { selectShowShuffleModal } from "store/selectors";

const ShuffleModal = () => {
  const dispatch = useDispatch();
  const showShuffleModal = useSelector(selectShowShuffleModal);

  const handleShuffleDeck = () => {
    dispatch(toggleShuffle());
    dispatch(shuffleDeck());
    toast.info("Deck shuffled");
  };

  const handleToggleShuffle = () => {
    dispatch(toggleShuffle());
  };

  const shuffleModalBody = (
    <>
      <div className="modal-overlay" />
      <div
        className="modal-wrapper"
        role="dialog"
        aria-modal={true}
        aria-hidden={true}
        aria-label="confirm-reshuffle-dialog"
        tabIndex={-1}
      >
        <div className="modal">
          <div className="modal-header">
            <div className="modal-close-bar">
              <div
                className="modal-close-icon"
                style={{
                  background: `url(${require("assets/close-modal.svg")}) no-repeat center`,
                }}
                onClick={handleToggleShuffle}
              />
            </div>
            <span className="modal-description">Re-Shuffle Deck?</span>
          </div>
          <div className="modal-button-row">
            <button onClick={handleShuffleDeck} className="modal-button">
              Re-Shuffle
            </button>
            <button onClick={handleToggleShuffle} className="modal-button">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <QuickDeckModal isVisible={showShuffleModal} modalBody={shuffleModalBody} />
  );
};

export default ShuffleModal;
