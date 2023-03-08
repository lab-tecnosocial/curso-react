import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTaskRedux, createTaskTimeout } from "../actions/actions";

const FormTask = (
  // { tarea, setTarea, tareas, setTareas }
  ) => {
  const [tarea, setTarea] = useState("");
  const dispatch = useDispatch();

  const onChangeInput = (e) => {
    e.preventDefault();
    setTarea(e.target.value);
  };
  const createTask = (e) => {
    e.preventDefault();
    if(tarea!==""){
      setTarea("");
      let object = {
        id:crypto.randomUUID(),
        name: tarea,
        completed: false
      }
      dispatch(createTaskRedux(object));
    }  
  };
  return (
    <form>
      <input
        type="text"
        className="entrada-tarea"
        value={tarea}
        onChange={onChangeInput}
      />
      <button type="submit" className="boton-entrada" onClick={createTask}>
        +
      </button>
    </form>
  );
};

export default FormTask;
