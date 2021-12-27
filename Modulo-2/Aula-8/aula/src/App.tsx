import { useState } from "react"

const App= () => {

  const[show,setShow] = useState(false)
  const handleClick = () =>{
    // setShow(!show) codigo mais facil

    if(show){
      setShow(false);
    } else{
      setShow(true)
    }
  }


  return(
    <div>
      <button onClick={handleClick}>{show === true ? 'Ocultar' : 'Mostrar'}</button>

      {show === true && 

        <div>
          blabla ...
        </div>
      }
    
    </div>
  );
};

export default App;