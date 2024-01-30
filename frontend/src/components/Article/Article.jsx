import { Sidebar } from "../Sidebar/Sidebar";
/*import { useParams } from "react-router-dom";*/
import "./Article.css";

export const Article = () => {
  /*const { cardId } = useParams();*/

  return (
    <section className="mainContainer">
      <Sidebar />
      <div className="articleContainer">
        <h1 className="titleArticle">Titulo de la entrada</h1>
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
