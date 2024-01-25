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
    <nav className="navContainer">
      <img src="../../../src/assets/LOGO-CRUDO-APP.svg" className="logo" />

      <div className="card flex justify-content-center">
        <Button
          label="+ Añadir nueva entrada"
          className="addPost"
          onClick={() => setVisible(true)}
        />
      </div>
      <Dialog
        className=" modal"
        header="Header"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <form>
          <InputText
            className="cardTitle"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <InputTextarea
            className="cardDescription"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows={5}
            cols={30}
          />
          <InputText
            className="cardAuthor"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
      </Dialog>
    </nav>
  );
};
