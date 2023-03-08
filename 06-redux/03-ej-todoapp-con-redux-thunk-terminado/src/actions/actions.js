import { types } from "../types/types"

export const getDataFromAPI = ()=>{
  return async(dispatch)=>{
    try {
      const response = await fetch(
        "https://servicio-hello.onrender.com/tareas"
      );
      await response.json().then((data) => {
        // setTareas(data.tareas);
        dispatch(setLoading());
        dispatch(setTareasRedux(data.tareas));
      });
    } catch (error) {
      console.log("Hubo un error: " + error.message);
    }
  }
}

export const createTaskTimeout = (task)=>{
  return (dispatch)=>{
    setTimeout(() => {
      
      dispatch(createTaskRedux(task))

    }, 3000);

  }
}

export const createTaskRedux = (task)=>{

  return {
    type: types.createTask ,
    payload: task
  }
}

export const markTaskRedux = (id)=>{

  return {
    type: types.markCompleteTask ,
    payload: id
  }
}
export const deleteTaskRedux = (id)=>{

  return {
    type: types.deleteTask ,
    payload: id
  }
}
export const setTareasRedux = (tareas)=>{

  return {
    type: types.setTareasRedux ,
    payload: tareas
  }
}
export const setLoading = ()=>{

  return {
    type: types.setLoading

  }
}
