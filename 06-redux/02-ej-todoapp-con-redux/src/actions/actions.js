import { types } from "../types/types"

export const createTaskRedux = (task)=>{

  return {
    type: types.createTask ,
    payload: task
  }
}