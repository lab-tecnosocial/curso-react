import { types } from "../types/types";

const initialState = {
  tareas:[],
  loading:true
}


export const myReducer = (state=initialState,action)=>{
  switch(action.type){
    case types.createTask:

    return {
      ...state,
      tareas: [...state.tareas,action.payload]
    };
    case types.markCompleteTask:
      const nuevasTareas = state.tareas.map((item) => {
        if (item.id === action.payload) {
          return { id: item.id, name: item.name, completed: !item.completed };
        }
        return item;
      });
    return {
      ...state,
      tareas: [...nuevasTareas]
    };

    case types.deleteTask:
      const tareasResultantes = state.tareas.filter((item) => {
        return item.id !== action.payload;
      });
    return {
      ...state,
      tareas: [...tareasResultantes]
    };
    case types.setTareasRedux:
      
    return {
      ...state,
      tareas: [...action.payload]
    };

    case types.setLoading:
      
    return {
      ...state,
      loading: !state.loading
    };


    
    default: 
    return state;

  }
}