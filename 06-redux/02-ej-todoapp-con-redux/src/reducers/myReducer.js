import { types } from "../types/types";

const initialState = {
  tareas:[],
  tarea:null
}


export const myReducer = (state=initialState,action)=>{
  switch(action.type){
    case types.createTask:

    return {
      ...state,
      tareas: [...state.tareas,action.payload]
    };
    default: 
    return state;

  }
}