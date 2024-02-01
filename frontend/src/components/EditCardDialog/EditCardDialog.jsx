import PropTypes from "prop-types";
import { Dialog } from "primereact/dialog";
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const EditCardDialog = ({
  visible,
  onHide,
  onSubmit,
  editTitle,
  setEditTitle,
  editUrl,
  setEditUrl,
  editDescription,
  setEditDescription,
}) => {
  return (
    <Dialog
      className="modal"
      visible={visible}
      style={{ width: "50vw" }}
      onHide={onHide}
    >
      <header className="cardHeader">
        <p>¿Quieres editar la entrada?</p>
      </header>

      <form className="cardForm" onSubmit={onSubmit}>
        <label htmlFor="cardTitle" className="cardTitle">
          Título
        </label>
        <InputText
          id="cardTitle"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          required
        />

        <label htmlFor="cardUrl" className="cardUrl">
          <i className="pi pi-link" /> Url
        </label>
        <InputText
          id="cardUrl"
          value={editUrl}
          onChange={(e) => setEditUrl(e.target.value)}
        />

        <label htmlFor="cardDescription" className="cardDescription">
          Descripción
        </label>
        <InputTextarea
          id="cardDescription"
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
          rows={5}
          cols={30}
          required
        />

        <div className="footerCard">
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

EditCardDialog.propTypes = {
  visible: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  editTitle: PropTypes.string.isRequired,
  setEditTitle: PropTypes.func.isRequired,
  editUrl: PropTypes.string.isRequired,
  setEditUrl: PropTypes.func.isRequired,
  editDescription: PropTypes.string.isRequired,
  setEditDescription: PropTypes.func.isRequired,
};

export default EditCardDialog;
