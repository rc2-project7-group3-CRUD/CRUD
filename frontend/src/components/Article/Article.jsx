
import { Sidebar } from '../Sidebar/Sidebar'
import { useParams } from "react-router-dom";

export const Article = () => {
const { cardId } = useParams();

  return (
    < Sidebar/>
  )
}
