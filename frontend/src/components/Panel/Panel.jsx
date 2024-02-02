import "./Panel.css";
import { Card } from "../Panel/Card/Card";
import { useState, useEffect } from "react";
import CardDialog from "../CardDialog/CardDialog";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export const Panel = () => {
  const [cards, setCards] = useState([]);
  const [visible, setVisible] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
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

  const postCard = (e) => {
    e.preventDefault();

    const url = "http://localhost:8080/cards";

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: newTitle,
        url: newUrl,
        description: newDescription,
        author: newAuthor,
      }),
    };

    fetch(url, options).then((response) => {
      if (response.ok) {
        setNewTitle("");
        setNewUrl("");
        setNewAuthor("");
        setNewDescription("");
        setVisible(false);
        setNeedsReload(true);
      }
    });
  };

  return (
    <div className="panelContainer">
      <div className="headerPanel">
        <h2 className="textLastPosts">Últimas entradas:</h2>
        <div className="p-inputgroup flex-1">
          <Button icon="pi pi-search" className="p-button-warning" />
          <InputText placeholder="¿Qué estás buscando?" className="inputSearch"/>
        </div>
      </div>
      <div className="cardsContainer">
        <article className="cardGallery emptyCard">
          <p className="emptyCardButton" onClick={() => setVisible(true)}>
            +
          </p>
        </article>

        <CardDialog
          visible={visible}
          onHide={() => setVisible(false)}
          onSubmit={postCard}
          newTitle={newTitle}
          setNewTitle={setNewTitle}
          newUrl={newUrl}
          setNewUrl={setNewUrl}
          newDescription={newDescription}
          setNewDescription={setNewDescription}
          newAuthor={newAuthor}
          setNewAuthor={setNewAuthor}
        />

        {[...cards].reverse().map((card, index) => (
          <Card key={index} entrada={card} />
        ))}
      </div>
    </div>
  );
};
