import { useState } from "react";
import "./Card.css";

export const Card = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className="cardContainer">
      <article className="cardGallery"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <div className="cardImage">
          <h3 className="cardName">Nombre de la entrada</h3>
          <img
            className="image"
            src="../../../../public/imagen-muestra.jpg"
            alt="imagen destacada"
          />
        </div>
          {isHovered && (
            <div className="cardHover">
              HOLA HOLA
            </div>
          )}

        
      </article>
      <article className="cardGallery emptyCard"></article>
    </section>
  );
};
