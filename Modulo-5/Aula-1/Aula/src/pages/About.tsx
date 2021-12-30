import { Link, useSearchParams } from "react-router-dom";


export const About = () =>{
  const [seachParams,setSeachParams] = useSearchParams()
  const setOrder = (order:'asc' | 'desc') => {
    seachParams.set('order',order )
    setSeachParams(seachParams)
  }
    return(
        <div>
          filtro: {seachParams.get('filter')} <br />
          Order: {seachParams.get('order')}
          <hr />
          <button onClick={()=>setOrder('asc')}>Asc</button> <br />
          <button onClick={()=>setOrder('desc')}>Desc</button>
          <hr />
          Página Sobre:
          <ul>
            <li><Link to="/sobre/mizael">Mizael</Link></li>
            <li><Link to="/sobre/douglas">Douglas</Link></li>
          </ul>  
        </div>
    )
}