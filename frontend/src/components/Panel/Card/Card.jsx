import { useState, } from "react";
import "./Card.css";
import { IconEdit } from "../../svg/IconEdit";
import { IconDelete } from "../../svg/IconDelete";
// import { useFetch } from "../../../useFetch";

export const Card = ({ entrada }) => {
  const [isHovered, setIsHovered] = useState(false);
  // const [needsReload, setNeedsReload] = useState(true);
  // const [cards, setCards] = useState([]);


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // const { data } = useFetch("http://localhost:8080/cards");
  // const URL = "http://localhost:8080/cards";

  // useEffect(() => {
  //   if (needsReload) {
  //     fetch(URL)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setCards(data);
  //         setNeedsReload(false);
  //       });
  //   }
  // }, [needsReload]);

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
