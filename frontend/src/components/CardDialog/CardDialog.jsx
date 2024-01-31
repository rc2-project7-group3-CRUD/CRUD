import PropTypes from "prop-types";
import { Dialog } from "primereact/dialog";
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const CardDialog = ({
  visible,
  onHide,
  onSubmit,
  newTitle,
  setNewTitle,
  newUrl,
  setNewUrl,
  newDescription,
  setNewDescription,
  newAuthor,
  setNewAuthor,
}) => {
  return (
    <Dialog
      className="modal"
      visible={visible}
      style={{ width: "50vw" }}
      onHide={onHide}
    >
      <header className="cardHeader">
        <p> Añade una nueva entrada</p>
      </header>

      <form className="cardForm" onSubmit={onSubmit}>
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
            type="submit"
            value="Create"
          />
        </div>
      </form>
    </Dialog>
  );
};

CardDialog.propTypes = {
  visible: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  newTitle: PropTypes.string.isRequired,
  setNewTitle: PropTypes.func.isRequired,
  newUrl: PropTypes.string.isRequired,
  setNewUrl: PropTypes.func.isRequired,
  newDescription: PropTypes.string.isRequired,
  setNewDescription: PropTypes.func.isRequired,
  newAuthor: PropTypes.string.isRequired,
  setNewAuthor: PropTypes.func.isRequired,
};

export default CardDialog;
