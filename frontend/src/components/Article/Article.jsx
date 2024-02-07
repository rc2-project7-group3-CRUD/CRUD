import { Sidebar } from "../Sidebar/Sidebar";
import { useParams } from "react-router-dom";
import "./Article.css";
import { useEffect } from "react";
import { useFetch } from "../../useFetch";
import PropTypes from "prop-types";

export const Article = ({ categories }) => {
  const { cardId } = useParams();
  const { data, error } = useFetch("http://localhost:8080/cards");
  const card = data ? data.find((card) => card.id === parseInt(cardId, 10)) : null;
  // parseInt analiza el contenido de cardId y la convierte en un número entero en base 10

  useEffect(() => {
    if (error) {
      console.error("Error fetching data:", error);
    }
  }, [error]);

  return (
    <section className="mainContainer">
      <Sidebar categories={categories}/>
      <div className="articleContainer">
        {card && (
          <div key={card.id}>
            <h1 className="titleArticle">{card.title}</h1>
            <div className="urlContainer">
              <i className="pi pi-link linkurl" />
              <a href={card.url} className="urlArticle" target="blank">{card.url}</a>
            </div>
            <p className="authorArticle">{card.author}</p>
            <p className="dateArticle">01/01/2024</p>
            <p className="descriptionArticle">{card.description}</p>
          </div>
        )}
      </div>
    </section>
  );
};

Article.propTypes = {
  categories: PropTypes.array,
};