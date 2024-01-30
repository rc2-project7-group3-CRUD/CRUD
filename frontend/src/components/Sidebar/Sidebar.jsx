import "./Sidebar.css";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from "primereact/inputtext";


export const Sidebar = () => {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  
  
  return (
    <>
      <nav className="navContainer">
        <img src="../../../src/assets/LOGO-CRUDO-APP.svg" className="logo" />

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

        <form className="cardForm">
          <label htmlFor="cardTitle" className="cardTitle">
            Título
          </label>
          <InputText
            id="cardTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label htmlFor="cardUrl" className="cardUrl">
            <i className="pi pi-link" /> Url
          </label>
          <InputText
            id="cardUrl"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />

          <label htmlFor="cardDescription" className="cardDescription">
            Descripción
          </label>
          <InputTextarea
            id="cardDescription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            cols={30}
            required
          />

          <div className="footerCard">
            <section className="authorCard">
              <label htmlFor="cardAuthor"> Autor </label>
              <InputText
                id="cardAuthor"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </section>
            <Button
              label="Enviar"
              className="sendPost"
              onClick={() => setVisible(true)}
            />
          </div>
        </form>
      </Dialog>
    </>
  );
};
