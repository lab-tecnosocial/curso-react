import React from "react";

const FormTask = ({ tarea, setTarea, tareas, setTareas }) => {
  const onChangeInput = (e) => {
    e.preventDefault();
    setTarea(e.target.value);
    // console.log(tarea);
  };
  const createTask = (e) => {
    e.preventDefault();
    // console.log(tarea);
    setTarea("");
    let object = {
      id:crypto.randomUUID(),
      name: tarea,
      completed: false
    }
    setTareas([...tareas,object]);
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
