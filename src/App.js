import './App.css';
import Menu from './components/Menu';
import Slider from './components/Slider';
import Pilares from './components/Pilares';
import Footer from './components/Footer';

function App() {
  return (
    <div className="layout">
      <Menu />
      <main className="content">
        <Slider />
        <section className="titles">
          <h1 className="titles__main">Bienvenido al mundo de Jujutsu Kaisen</h1>
          <p className="titles__text">
            Yuji Itadori entra al mundo de las maldiciones y descubre un universo lleno de peligros,
            hechiceros y criaturas sobrenaturales.
          </p>
        </section>
        <Pilares />
      </main>
      <Footer />
    </div>
  );
}

export default App;