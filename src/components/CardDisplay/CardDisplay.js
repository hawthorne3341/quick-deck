import React from "react";
import useCardDisplay from "./useCardDisplay";

const CardDisplay = () => {
  const { cardLabel, cardImage, cardsRemaining } = useCardDisplay();

  debugger;
  return (
    <div className="card-display">
      {!!cardsRemaining ? (
        <div
          // key attribute allows css animation to be triggered
          key={Math.random()}
          className="card"
          aria-label={cardLabel}
          style={{
            background: cardImage,
          }}
        />
      ) : (
        <div className="deck-placeholder">No cards remaining</div>
      )}
    </div>
  );
};

export default CardDisplay;
