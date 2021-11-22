import React from "react";
import QuickDeckModal from "../QuickDeckModal";
import { useDispatch, useSelector } from "react-redux";
import { cutDeck, toggleCut } from "store/actions";
import { selectShowCutModal } from "store/selectors";

const CutModal = () => {
  const dispatch = useDispatch();
  const showCutModal = useSelector(selectShowCutModal);

  const handleCutDeck = () => {
    dispatch(cutDeck(26));
  };

  const handleToggleCut = () => {
    dispatch(toggleCut());
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
            <h5 className="modal-title">Cut Modal</h5>
            <span className="modal-description">
              Why this modal has popped up
            </span>
          </div>
          <button onClick={handleCutDeck} className="modal-button">
            Cut Deck
          </button>
          <button onClick={handleToggleCut} className="modal-button">
            Close
          </button>
        </div>
      </div>
    </>
  );

  return <QuickDeckModal isVisible={showCutModal} modalBody={cutModalBody} />;
};

export default CutModal;
