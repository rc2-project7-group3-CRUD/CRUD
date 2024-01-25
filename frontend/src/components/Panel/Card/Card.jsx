import "./Card.css";

export const Card = () => {
  return (
    <section className="cardContainer">
      <article className="cardGallery">
        <div className="cardImage">
          <img
            className="image"
            src="../../../../public/imagen-muestra.jpg"
            alt="imagen destacada"
          />
          <h3>Nombre de la entrada</h3>
        </div>
      </article>
      <article className="cardGallery emptyCard"></article>
    </section>
  );
};
