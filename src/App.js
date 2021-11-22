import React from "react";
import CardDisplay from "./components/CardDisplay";
import CardControls from "./components/CardControls";
import CutModal from "./components/QuickDeckModal/Impl/CutModal";

function App() {
  return (
    <div className="app">
      <CardDisplay />
      <CardControls />
      <CutModal />
    </div>
  );
}

export default App;
