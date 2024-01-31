import "./Panel.css";
import { Card } from "../Panel/Card/Card";
import { useState, useEffect } from "react";
import { Dialog } from "primereact/dialog";
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";


export const Panel = () => {
  const [cards, setCards] = useState([]);
  const [needsReload, setNeedsReload] = useState(true);
  const [visible, setVisible] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newCard, setNewCard] = useState("");

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
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: newTitle,
        url: newUrl,
        description: newDescription,
        author: newAuthor,
        card: newCard
      })
    };
  
    fetch(url, options)
      .then(response => {
        if (response.ok) {
          setNewCard("");
          setNewTitle("");
          setNewUrl("");
          setNewAuthor("");
          setNewDescription("");
          setVisible(false);
          setNeedsReload(true);
        }
      })
  };

  return (
    <div className="panelContainer">
      <h2 className="textLastPosts">Últimas entradas:</h2>
      <div className="cardsContainer">
        <article className="cardGallery emptyCard">
          <p className="emptyCardButton" onClick={() => setVisible(true)}>+</p>
        </article>

        <Dialog
        className="modal"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <header className="cardHeader">
          <p> Añade una nueva entrada</p>
        </header>

        <form className="cardForm" onSubmit={postCard}>
          <label htmlFor="cardTitle" className="cardTitle">
            Título
          </label>
          <InputText
            id="cardTitle"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            required
          />

          <label htmlFor="cardUrl" className="cardUrl">
            <i className="pi pi-link" /> Url
          </label>
          <InputText
            id="cardUrl"
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
          />

          <label htmlFor="cardDescription" className="cardDescription">
            Descripción
          </label>
          <InputTextarea
            id="cardDescription"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            rows={5}
            cols={30}
            required
          />

          <div className="footerCard">
            <section className="authorCard">
              <label htmlFor="cardAuthor"> Autor </label>
              <InputText
                id="cardAuthor"
                value={newAuthor}
                onChange={(e) => setNewAuthor(e.target.value)}
              />
            </section>
            <Button
              label="Enviar"
              className="sendPost"
              onClick={() => setVisible(true)}
              type='submit'
              value="Create" 
            />
          </div>
        </form>
      </Dialog>

        {[...cards].reverse().map ((card, index) => (
        <Card key={index} entrada={card} />
      ))} 
      </div>
    </div>
  )
}
