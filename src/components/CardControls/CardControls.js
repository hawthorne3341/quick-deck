import React from "react";
import useCardControls from "./useCardControls";

const CardControls = () => {
  const { cutDisabled, drawDisabled, handleShuffle, handleCut, handleDraw } =
    useCardControls();

  return (
    <div className="card-controls">
      <button className="btn" onClick={handleShuffle}>
        Shuffle
      </button>
      <button className="btn" disabled={cutDisabled} onClick={handleCut}>
        Cut
      </button>
      <button className="btn" disabled={drawDisabled} onClick={handleDraw}>
        Draw
      </button>
    </div>
  );
};

export default CardControls;
