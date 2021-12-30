import { ChangeEvent, useState } from "react";
import { usePeopleList } from "./reducers/peopleList";


const App = () => {
  const [list,dispatch] = usePeopleList()
  const [nameInput, setNameInput] = useState('')

  const handleAddButton= () => {
    if(nameInput){
      dispatch({
        type:'ADD',
        payload:{
          name: nameInput
        }
      })
      setNameInput('')
    }
  }
  const handleInputChanhe = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value)
  }
  const deletPerson = (id:string) =>{
    dispatch({
      type:'DEL',
      payload:{ id }
    })
  }
  const handleOrderButton = () => {
    dispatch({
      type: 'ORDER'
    });
  }

  return (
    <div className="p-5">
      <input type="text" value={nameInput}  onChange={handleInputChanhe} className="bg-blue-300 mr-2" />
      <button onClick={handleAddButton}>Adicionar</button>

    
    <br /><br />

      <hr />
      <button onClick={handleOrderButton}>Ordenar</button> 
      
      <br /><br />
      
      Lista de Pessoas: 
      <ul>
        {list.map((item, index) => (
          <li key={index}>
              {item.name}
              <button onClick={()=> deletPerson(item.id)}><p className="text-red-500 ml-2"> [ deletar ]</p></button>
            </li>
        ))}
     </ul>
    </div>
  )
}

export default App
