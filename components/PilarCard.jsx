function PilarCard({ nombre, descripcion, imagen }) {
  return (
    <article className="pillars__card">
      <img className="pillars__img" src={imagen} alt={nombre} />
      <h2 className="pillars__title">{nombre}</h2>
      <p className="pillars__text">{descripcion}</p>
    </article>
  );
}

export default PilarCard;