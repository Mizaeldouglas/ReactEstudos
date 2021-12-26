import { useState } from "react";



const App= () => {
  const[name,setName] = useState('Mizael')

  const handleButtonClick =() => {
    setName('Douglas')
  }



  return(
    <div>
      Meu nome é: {name}.
      <button onClick={handleButtonClick}>click aqui</button>
    </div>
  );
};
export default App;