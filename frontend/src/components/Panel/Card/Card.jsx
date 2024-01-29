import "./Card.css";

export const Card = () => {
  return (
    <section className="cardContainer">
      <article className="cardGallery">
        <div className="cardImage">
          <h3 className="cardName">Nombre de la entrada</h3>
          <img
            className="image"
            src="../../../../public/imagen-muestra.jpg"
            alt="imagen destacada"
          />
        </div>
      </article>
      <article className="cardGallery emptyCard"></article>
    </section>
  );
};
