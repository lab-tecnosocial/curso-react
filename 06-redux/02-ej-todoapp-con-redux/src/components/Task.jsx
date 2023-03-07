import React from "react";

const Task = ({ name, id, completed, tarea, setTarea, tareas, setTareas }) => {
  const handleCompleted = (identificador) => {
    const nuevasTareas = tareas.map((item) => {
      if (item.id === identificador) {
        return { id: item.id, name: item.name, completed: !item.completed };
      }
      return item;
    });
    setTareas(nuevasTareas);
  };
  const handleDelete = (identificador) => {
    const nuevasTareas = tareas.filter((item) => {
      return item.id !== identificador;
    });

    setTareas(nuevasTareas);
  };
  return (
    <div className={`tarea ${completed && "completado"}`}>
      <li className="tarea-item">{name}</li>
      <button
        className="boton-completado"
        onClick={() => {
          handleCompleted(id);
        }}
      >
        O
      </button>
      <button
        className="boton-eliminado"
        onClick={() => {
          handleDelete(id);
        }}
      >
        X
      </button>
    </div>
  );
};

export default Task;
