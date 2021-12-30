import { useContagem } from "./reducers/Contagem";

const App = () => {
  const [contagem, contagemDispatch] = useContagem()

  return (
    <div className="p-5">
       contagem:{contagem.count}
       <hr />
       <button className="p-3 ml-2 bg-blue-200" onClick={()=>contagemDispatch({type:'ADD'})}>Adicionar</button>
       <button className="p-3 ml-2 bg-blue-200" onClick={()=>contagemDispatch({type:'DELL'})}>Remover</button>
       <button className="p-3 ml-2 bg-blue-200" onClick={()=>contagemDispatch({type:'RESET'})}>Resetar</button>

    </div>
  )
}

export default App
