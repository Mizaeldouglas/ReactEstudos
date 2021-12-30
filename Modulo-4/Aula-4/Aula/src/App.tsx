import { useState, useEffect } from "react";
import { Movie } from "./types/Movie";


const App = () => {
  const [movies, setMovies]= useState<Movie[]>(([]))
  const [loading,setLoading] = useState(false)

  useEffect(() =>{
    loadMovies()
  },[])

  
  const loadMovies = () => {
    fetch('https://api.b7web.com.br/cinema')
      .then((response)=>{
        return response.json()
      })
      .then((json)=>{
        setMovies(json)
      })
      .catch((e)=>{

      setLoading(false)
      setMovies([])
      alert('Erro! tento mais tarde')
      })
  }


/*
  const loadMovies = async () => {
    try{
      setLoading(true)
      let response = await fetch('https://api.b7web.com.br/cinema')
      let json = await response.json() 
      setLoading(false)
      setMovies(json)
    }catch(e){
      setLoading(false)
      alert('Erro! tento mais tarde')
    }
  }
*/

  return (
    <div>
      
        
        {loading && 
          <div className="my-80 mx-80">Carregando...</div>
        }
        {!loading && movies.length > 0 &&
          <div>Total de Filmes: {movies.length}</div>
        }

      <div className="grid grid-cols-6 gap-3 ml-2">
        {movies.map((item, index) =>(
          <div>
            <img src={item.avatar} className="w-32 block " />
            {item.titulo}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
