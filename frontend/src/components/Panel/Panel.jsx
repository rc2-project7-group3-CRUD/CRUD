import "./Panel.css";
import { Card } from "../Panel/Card/Card";

export const Panel = () => {
  return (
    <div className="panelContainer">
        <h2 className="textLastPosts">Últimas entradas:</h2>
        <Card />
    </div>
  )
}
