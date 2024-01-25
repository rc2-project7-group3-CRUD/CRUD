import "./Card.css"

export const Card = () => {
  return (
    <section className="cardContainer">
        <article className="cardGallery">
            <img className="cardImage" src="../../../../public/imagen-muestra.jpg" alt="imagen destacada" />
        </article>
        <article className="cardGallery emptyCard">
        </article>
    </section>
  )
}
