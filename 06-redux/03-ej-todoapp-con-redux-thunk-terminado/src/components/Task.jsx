import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTaskRedux, markTaskRedux } from "../actions/actions";

const Task = ({ name, id, completed, 
  // tarea, setTarea, tareas, setTareas 
}) => {
  const dispatch = useDispatch();

  const handleCompleted = (identificador) => {
    dispatch(markTaskRedux(identificador));
  };

  const handleDelete = (identificador) => {
    dispatch(deleteTaskRedux(identificador));
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
