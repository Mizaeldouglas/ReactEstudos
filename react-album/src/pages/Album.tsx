import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../api";
import { PhotoItem } from "../components/photoItem";
import { Album as AlbumType } from "../types/Album";
import { Photo } from "../types/Photo";


export const Album =() => {
const params = useParams()
const navigate = useNavigate()

const [loading,setLoading] = useState(false)
const [list, setList] = useState<Photo[]>([])
const [albumInfo,setAlbumInfo] = useState <AlbumType>({id:0,title:'',userId:0})

useEffect(() =>{
  if(params.id){
    loadPhotos(params.id);
    loadAlbumInfo(params.id);
  }
},[])

const loadPhotos =  async (id:string) => {
  setLoading(true)
  const photos = await api.getPhotoFromAlbum(id)
  setList( photos )
  setLoading(false)
}

const loadAlbumInfo = async (id:string) => {
  const albumInfo = await api.getAlbum(id)
  setAlbumInfo( albumInfo )
}

const handleButton = () => {
  navigate(-1)
}

  return (
      <div>
        <button onClick={handleButton}>Voltar</button>
        {loading && 'Carregando'}
        <h1>{albumInfo.title}</h1>
        {list.map((item, index)=>(
          <PhotoItem 
          key={index}
          data={item}
          
          />
        ))}
      </div>
  )
} 