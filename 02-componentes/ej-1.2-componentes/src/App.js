import './App.css';
import Header from './components/Header';
import Buscador from './components/Buscador';
import Item from './components/Item';
import { useState } from 'react';

function App() {
  const [entrada, setEntrada] = useState('');
  const [tareas, setTareas] = useState([]);
  return (
    <>
      <Header />
      <main>
        <Buscador entrada={entrada} setEntrada={setEntrada} tareas={tareas} setTareas={setTareas} />
        <div className="contenedor-tareas">
          <ul className="lista-tareas">
            {tareas.map((tarea) => {
              return <Item texto={tarea.texto} key={tarea.id} tareas={tareas} completado={tarea.completado} setTareas={setTareas} /> 
            })
            }
          </ul>
        </div>
      </main>
    </>

  );
}

export default App;
