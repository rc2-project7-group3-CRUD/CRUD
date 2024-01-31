import "./Sidebar.css";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from "primereact/inputtext";
import { Link } from "react-router-dom";


export const Sidebar = () => {
  const [visible, setVisible] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newCard, setNewCard] = useState("");
  const [needsReload, setNeedsReload] = useState(true);

  const postCard = (e) => {
    e.preventDefault();

  const url = "http://localhost:8080/cards";


  const options = {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: newCard })
  };
  fetch(url, options)
    .then(response => {
      if (response.ok) {
        setNewCard("");
        setNewTitle("");
        setNewUrl("");
        setNewAuthor("");
        setNewDescription("");
        setNeedsReload(true);
      }
    })
}

  
  return (
    <>
      <nav className="navContainer">
        <Link to= "/">
        <img src="../../../src/assets/LOGO-CRUDO-APP.svg" className="logo" />
        </Link>

        <div className="card flex justify-content-center">
          <Button
            label="+ Añadir nueva entrada"
            className="addPost"
            onClick={() => setVisible(true)}
          />
        </div>
      </nav>
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
            // value={newMovieTitle} onChange={e => setNewMovieTitle(e.target.value)}
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
              // disabled={newCard === ""}
              type='submit'
              value="Create" 
            />
          </div>
        </form>
      </Dialog>
    </>
  );
};
