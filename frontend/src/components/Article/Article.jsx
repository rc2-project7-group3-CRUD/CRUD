import { Sidebar } from "../Sidebar/Sidebar";
/*import { useParams } from "react-router-dom";*/
import "./Article.css";
import { useEffect, useState } from "react";
import { useFetch } from "../../useFetch";

export const Article = () => {
  /*const { cardId } = useParams();*/
  const [cards, setCards] = useState([]);
  const [needsReload, setNeedsReload] = useState(true);
  const { data } = useFetch(`http://localhost:8080/cards`);
  const { title, url, description, author } = data;

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
    <section className="mainContainer">
      <Sidebar />
      <div className="articleContainer">
        {cards.map((card) => (
        <h1 className="titleArticle" key={card.id}>{`${card.title}`}</h1>
        ))}
        <div className="urlContainer">
        <i className="pi pi-link linkurl" />
        <p className="urlArticle">URL</p>
        </div>
        <p className="authorArticle">kjhjk</p>
        <p className="dateArticle">jhj</p>
        <p className="descriptionArticle">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
          sequi voluptatibus maxime quos impedit deleniti iure ab laboriosam
          eius, repellat odit laudantium minima necessitatibus dolorem quae! Aut
          labore neque obcaecati.
        </p>
      </div>
    </section>
  );
};
