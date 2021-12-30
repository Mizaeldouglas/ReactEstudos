import { ChangeEvent, useEffect, useState } from "react";

const App = () => {
  const [name,setName] = useState('')
  const [lastName,setLastName] = useState('')
  const [fullName,setfullName] = useState('')


  useEffect(() => {
    setfullName(`${name} ${lastName}`)
  },[name,lastName])

  const handleNameChange = (e:ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const handleLastNameChange = (e:ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value)
  }




  return (
    <div>
    <input type="text" placeholder="Digite seu NOME" value={name} onChange={handleNameChange} />
    <input type="text" placeholder="Digite seu SOBRENOME" value={lastName} onChange={handleLastNameChange}/>
    
    Nome Completo:{fullName}
    
    </div>
  )
}

export default App
