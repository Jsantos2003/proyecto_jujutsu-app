function Menu() {
  return (
    <header className="header">
      <div className="header__logo">
        <img 
          className="header__logo-img" 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkxNhqiiQdsxoc-JSvFFPyc2T4GC8OZP6QOA&s"
          alt="Logo Jujutsu Kaisen" 
        />
      </div>
      <nav className="header__nav">
        <a className="header__link" href="#">Inicio</a>
        <a className="header__link" href="#">Personajes</a>
        <a className="header__link" href="#">Historia</a>
        <a className="header__link" href="#">Contacto</a>
      </nav>
    </header>
  );
}

export default Menu;