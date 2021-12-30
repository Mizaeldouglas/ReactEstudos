import { Photo } from "../../types/Photo";
import { Link } from "react-router-dom";
import './style.css'

type Props = {
    data: Photo
}
export const PhotoItem = ({data}:Props) => {
  return(
    <Link to={`/photo/${data.id}`} className="photo">
        <img src={data.thumbnailUrl} alt={data.title} />
    </Link>
  )
}