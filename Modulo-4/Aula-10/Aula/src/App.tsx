import { useState, useEffect, ChangeEvent } from "react";
import { PostForm } from "./components/PostForm";
import { Post } from "./types/Post";
import { PostItem } from "./components/PostItem";
import { api } from "./api";

const App = () => {
  const [post, setPost]= useState<Post[]>([])
  const [loading,setLoading] = useState(false)

  

  useEffect(() =>{
    loadPost()
  },[])

  const loadPost = async () => {
    setLoading(true)
    let json = await api.getAllPost()
    setLoading(false)
    setPost(json)
  }

  const handleAddPost = async (title:string, body:string) =>{
    let json = await api.addNewPost(title,body,1)
    if(json.id){
      alert('Post adicionado com sucesso!')
    }else{
      alert('Ocorreu algum erro!')
    }
  }


  return (
    <div className="p-5">
          
        {loading && 
          <div>Carregando...</div>
        }

      <PostForm onAdd={handleAddPost} />  


        {!loading && post.length > 0 &&
        <>
              <div>Total de Filmes: {post.length}</div>

          <div>
            {post.map((item, index) =>(
              <PostItem data={item} />
            ))}
          </div>
        </>  
        }
        {!loading && post.length ===0 &&
          <div>Não há post para exíbir</div>
        }
    </div>
  )
}

export default App
