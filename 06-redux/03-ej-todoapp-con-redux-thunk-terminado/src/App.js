import { useEffect } from "react";
import Header from "./components/Header";
import FormTask from "./components/FormTask";
import Task from "./components/Task";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getDataFromAPI } from "./actions/actions";
function App() {
  const { tareas:tasks,loading} = useSelector(state=>state.myReducer);
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getDataFromAPI());

  }, [dispatch]);

  return (
    <>
      <Header />
      <FormTask
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
               
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default App;
