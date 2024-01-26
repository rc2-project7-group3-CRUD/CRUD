import "./Sidebar.css";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from "primereact/inputtext";

export const Sidebar = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");
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
        className=" modal"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <form className="cardForm">
          <header>
            <h2> Añade una nueva entrada</h2>
          </header>
          <label htmlFor="cardTitle"> Título </label>
          <InputText
            id="cardTitle"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <label htmlFor="cardUrl"> Url</label>
          <InputText
            id="cardUrl"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <label htmlFor="cardDescription"> Descripción </label>
          <InputTextarea
            id="cardDescription"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows={5}
            cols={30}
          />
          <div className="footerCard">
            <section className="authorCard">
              <label htmlFor="cardAuthor"> Autor </label>
              <InputText
                id="cardAuthor"
                value={value}
                onChange={(e) => setValue(e.target.value)}
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
