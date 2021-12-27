import { useState } from "react";

const App = () => {
  const [padding, setPadding] = useState(0)
  const handleClick = () => {
    setPadding(20)
  }
  return (
    <div>
      <button 
      onClick={handleClick}
      style={{
        backgroundColor: '#f55',
        color:'#fff',
        border:'0',
        padding
        }}>Clique Aqui</button>
    </div>
  )
}

export default App
