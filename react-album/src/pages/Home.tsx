import { useEffect, useState } from "react";
import { api } from "../api";
import { AlbumItem } from "../components/albumItem";
import { Album } from "../types/Album";


export const Home =() => {
  const [loading,setLoading]= useState(false)
  const [list,setList] = useState<Album []>([])


  useEffect(() => {
    loadAlbums()
  },[])

  const loadAlbums = async() => {
    setLoading(true)
    const album = await api.getAlbums()
    setList( album )

    setLoading(false)
  }

  return (
      <div>
          {loading && "Carregando..."}

          {list.map((item,index) =>(
            <AlbumItem 
              key={index}
              id={item.id}
              title={item.title}
            />
          ))}
      </div>
  )
} 