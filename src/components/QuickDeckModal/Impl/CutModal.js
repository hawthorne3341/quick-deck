import React, { useState } from "react";
import { toast } from "react-toastify";
import QuickDeckModal from "../QuickDeckModal";
import { useDispatch, useSelector } from "react-redux";
import { cutDeck, toggleCut } from "store/actions";
import { selectShowCutModal } from "store/selectors";
import "../quick-deck-modal.scss";

const invalidInputMessage = "Please enter a number between 1 and 52";

const useCutModal = () => {
  const dispatch = useDispatch();
  const showCutModal = useSelector(selectShowCutModal);

  const [isValidInput, setIsValidInput] = useState(true);
  const [inputAmount, setInputAmount] = useState(0);

  const handleInputChange = (value) => {
    if (!!!isNaN(value) && value > 0 && value <= 52) {
      setIsValidInput(true);
      setInputAmount(value);
    } else {
      setIsValidInput(false);
    }
  };

  const handleCutDeck = (value) => {
    if (value === "random") value = Math.floor(Math.random() * 26 + 13);

    dispatch(toggleCut());
    dispatch(cutDeck(value));
    toast.info(`Removed ${value} cards from deck`);
  };

  const handleToggleCut = () => {
    setIsValidInput(true);
    dispatch(toggleCut());
  };

  return {
    showCutModal,
    isValidInput,
    inputAmount,
    handleInputChange,
    handleCutDeck,
    handleToggleCut,
    isValidInput,
  };
};

const CutModal = () => {
  const {
    showCutModal,
    isValidInput,
    inputAmount,
    handleInputChange,
    handleCutDeck,
    handleToggleCut,
  } = useCutModal();

  const cutModalBody = (
    <>
      <div className="modal-overlay" />
      <div
        className="modal-wrapper"
        role="dialog"
        aria-modal={true}
        aria-hidden={true}
        aria-label="confirm-cut-dialog"
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
                onClick={handleToggleCut}
              />
            </div>
            <span className="modal-description">
              Number of cards to remove:
            </span>
            <input
              type="text"
              aria-label="card-amount-input"
              onChange={(e) => handleInputChange(e.target.value)}
            />
            {!!!isValidInput && (
              <span className="invalid-input-msg">{invalidInputMessage}</span>
            )}
          </div>
          <div className="modal-button-row">
            <button
              onClick={() => handleCutDeck("random")}
              aria-label="cut-random-amt-btn"
              className="random-cut-btn"
            >
              Choose For Me
            </button>
            <button
              onClick={(e) => handleCutDeck(inputAmount)}
              aria-label="cut-designated-amt-btn"
              disabled={!!!isValidInput}
              className="modal-button"
            >
              Cut Deck
            </button>
          </div>
        </div>
      </div>
    </>
  );

  return <QuickDeckModal isVisible={showCutModal} modalBody={cutModalBody} />;
};

export default CutModal;
