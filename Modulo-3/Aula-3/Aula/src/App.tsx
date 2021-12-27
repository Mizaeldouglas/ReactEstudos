import { useState } from "react";
import { Botao } from "./components/Botao";

const App = () => {
  return (
    <div className="square">
      <Botao />
      <p className="legend">Legenda</p>
    </div>
  )
}

export default App
