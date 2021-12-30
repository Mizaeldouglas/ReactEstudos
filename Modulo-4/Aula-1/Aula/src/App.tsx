import { useEffect, useState } from "react";

const App = () => {
  const [name,setName] = useState('Mizael')

  useEffect(() =>{
    alert('executou')
  }, [name])
  
  const handleClick = () => {
    setName('Douglas')
  }
  return (
    <div>
      Nome:{name}
      <button onClick={handleClick}>Click aqui</button>
    </div>
  )
}

export default App
