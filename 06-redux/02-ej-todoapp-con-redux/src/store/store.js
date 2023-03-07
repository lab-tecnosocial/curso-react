import {createStore} from 'redux';
import {combineReducers} from 'redux';
import { myReducer } from '../reducers/myReducer';
const reducers = combineReducers({
  myReducer: myReducer,
  
})

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)