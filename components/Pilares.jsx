import PilarCard from './PilarCard';

function Pilares() {
  const personajes = [
    {
      nombre: "Yuji Itadori",
      descripcion: "El protagonista de la historia y recipiente de Sukuna.",
      imagen: "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2023/07/jujutsu-kaisen-yuji-itadori.jpg"
    },
    {
      nombre: "Satoru Gojo",
      descripcion: "El hechicero más poderoso de la academia Jujutsu.",
      imagen: "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2023/07/jujutsu-kaisen-gojo-fanart-husbando.jpg?fit=1280%2C720&ssl=1"
    },
    {
      nombre: "Ryomen Sukuna",
      descripcion: "La maldición más peligrosa del universo Jujutsu.",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5z0UHaUP83d8waDIdhb5f5OdhMvUHtr7hw&s"
    }
  ];

  return (
    <section className="pillars">
      {personajes.map((personaje, index) => (
        <PilarCard 
          key={index}
          nombre={personaje.nombre}
          descripcion={personaje.descripcion}
          imagen={personaje.imagen}
        />
      ))}
    </section>
  );
}

export default Pilares;