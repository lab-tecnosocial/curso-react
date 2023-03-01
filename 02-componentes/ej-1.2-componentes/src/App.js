import './App.css';
import Header from './components/Header';
import Buscador from './components/Buscador';
import Item from './components/Item';

function App() {
  return (
    <>
      <Header />
      <main>
        <Buscador />
        <div class="contenedor-tareas">
          <ul class="lista-tareas">
            <Item tarea="Tarea 1"/>
            <Item tarea="Tarea 2"/>
          </ul>
        </div>
      </main>
    </>

  );
}

export default App;
