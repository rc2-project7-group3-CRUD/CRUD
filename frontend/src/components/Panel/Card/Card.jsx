import { useState, } from "react";
import "./Card.css";
import { IconEdit } from "../../svg/IconEdit";
import { IconDelete } from "../../svg/IconDelete";

export const Card = ({ entrada }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className="cardContainer">
      <article
        className="cardGallery"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="cardImage">
          <ul className="cardName">
            <li>{`${entrada.title}`}</li>
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
    </section>
  );
};
