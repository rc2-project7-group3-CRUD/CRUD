import "./Panel.css";
import { Card } from "../Panel/Card/Card";
import { useState, useEffect } from "react";

export const Panel = () => {
  const [cards, setCards] = useState([]);
  const [needsReload, setNeedsReload] = useState(true);

  const URL = "http://localhost:8080/cards";

  useEffect(() => {
    if (needsReload) {
      fetch(URL)
        .then((response) => response.json())
        .then((data) => {
          setCards(data);
          setNeedsReload(false);
        });
    }
  }, [needsReload]);


  return (
    <div className="panelContainer">
      <h2 className="textLastPosts">Últimas entradas:</h2>
      <div className="cardsContainer">
        <article className="cardGallery emptyCard">
          <p className="emptyCardButton">+</p>
        </article>
        {[...cards].reverse().map ((card, index) => (
        <Card key={index} entrada={card} />
      ))} 
      </div>
    </div>
  )
}
