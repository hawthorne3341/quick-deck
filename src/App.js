import React from "react";
import CardDisplay from "./components/CardDisplay";
import CardControls from "./components/CardControls";
import CutModal from "./components/QuickDeckModal/Impl/CutModal";
import ShuffleModal from "./components/QuickDeckModal/Impl/ShuffleModal";

function App() {
  return (
    <div className="app">
      <CardDisplay />
      <CardControls />
      <CutModal />
      <ShuffleModal />
    </div>
  );
}

export default App;
