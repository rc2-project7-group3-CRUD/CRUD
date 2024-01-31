import { useState, useEffect} from "react";
import "./Card.css";
import { IconEdit } from "../../svg/IconEdit";
import { IconDelete } from "../../svg/IconDelete";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Card = ({ entrada }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [randomImageIndex, setRandomImageIndex] = useState(0); // Estado para almacenar el índice de la imagen aleatoria

  // Nombres de las imágenes en la carpeta public/images
  const imageNames = ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg", "imagen4.jpg", "imagen5.jpg", "imagen6.jpg", "imagen7.jpg", "imagen8.jpg", "imagen9.jpg", "imagen10.jpg", "imagen11.jpg", "imagen12.jpg", "imagen13.jpg", "imagen14.jpg", "imagen15.jpg", "imagen16.jpg", "imagen17.jpg", "imagen18.jpg", "imagen19.jpg", "imagen20.jpg", "imagen21.jpg", "imagen22.jpg", "imagen23.jpg", "imagen24.jpg", "imagen25.jpg", "imagen26.jpg" ];

  useEffect(() => {
    // Genera un número aleatorio entre 0 y la longitud del array de imágenes
    const randomIndex = Math.floor(Math.random() * imageNames.length);
    setRandomImageIndex(randomIndex);
  }, [imageNames.length]);
  // imageNames.length debería estar aquí para asegurarse de que el efecto se vuelva a ejecutar si imageNames.length cambia en el futuro

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
            src={`/images/${imageNames[randomImageIndex]}`} // Ruta de la imagen aleatoria
            alt="imagen destacada"
          />
        </div>
        {isHovered && (
          <div className="cardHover">
          
            <Link to={`/article/${entrada.id}`} className="readMoreButton">LEER MAS</Link>
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

Card.propTypes = {
  entrada: PropTypes.shape({
    entrada: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
