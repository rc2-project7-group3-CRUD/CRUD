import "./Card.css";

export const Card = () => {
  return (
    <section className="cardContainer">
      <article className="cardGallery">
        <div className="cardImage">
          <img
            className="cardGallery"
            src="../../../../public/imagen-muestra.jpg"
            alt="imagen destacada"
          />
        </div>
      </article>
      <article className="cardGallery emptyCard"></article>
    </section>
  );
};
