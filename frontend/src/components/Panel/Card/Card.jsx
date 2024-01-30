import { useState, useEffect } from "react";
import "./Card.css";
import { IconEdit } from "../../svg/IconEdit";
import { IconDelete } from "../../svg/IconDelete";
// import { useFetch } from "../../../useFetch";

export const Card = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [needsReload, setNeedsReload] = useState(true);
  const [titles, setTitles] = useState([]);


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // const { data } = useFetch("http://localhost:8080/cards");
  const URL = "http://localhost:8080/cards";

  useEffect(() => {
    if (needsReload) {
      fetch(URL)
        .then((response) => response.json())
        .then((data) => {
          setTitles(data);
          setNeedsReload(false);
        });
    }
  }, [needsReload]);

  return (
    <section className="cardContainer">
      <article
        className="cardGallery"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="cardImage">
          <ul className="cardName">
            {titles.map((card) => (
              <li key={card.id}>{`${card.title}`}</li>
            ))}
          </ul>

          <img
            className="image"
            src="../../../../public/imagen-muestra.jpg"
            alt="imagen destacada"
          />
        </div>
        {isHovered && (
          <div className="cardHover">
            <a className="readMoreButton">LEER MÁS</a>
            <ul className="cardIcons">
              <li>
                <IconEdit />
              </li>
              <li>
                <IconDelete />
              </li>
            </ul>
          </div>
        )}
      </article>
      <article className="cardGallery emptyCard">
        <p className="emptyCardButton">+</p>
      </article>
    </section>
  );
};
