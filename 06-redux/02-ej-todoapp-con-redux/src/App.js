import { useState, useEffect } from "react";
import Header from "./components/Header";
import FormTask from "./components/FormTask";
import Task from "./components/Task";

import "./App.css";
import { useSelector } from "react-redux";
function App() {
  const [tarea, setTarea] = useState("");
  const [loading, setLoading] = useState(false);
  const { tareas:tasks,tarea:task } = useSelector(state=>state.myReducer);
  // const [tareas, setTareas] = useState([]);
  useEffect(() => {
    // getDataFromAPI();
  }, []);

  const getDataFromAPI = async () => {
    try {
      const response = await fetch(
        "https://servicio-hello.onrender.com/tareas"
      );
      await response.json().then((data) => {
        // setTareas(data.tareas);
        setLoading(false);
        console.log(data.tareas);
      });
    } catch (error) {
      console.log("Hubo un error: " + error.message);
    }
  };
  return (
    <>
      <Header />
      <FormTask
        tarea={tarea}
        setTarea={setTarea}
        // tareas={tareas}
        // setTareas={setTareas}
      />
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <div className="contenedor-tareas">
          <ul className="lista-tareas">
            {tasks.map((item) => (
              <Task
                key={`${item.id}-${item.name}`}
                name={item.name}
                id={item.id}
                completed={item.completed}
                tarea={tarea}
                setTarea={setTarea}
                // tareas={tareas}
                // setTareas={setTareas}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default App;
