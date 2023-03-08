import {createStore,applyMiddleware, compose} from 'redux';
import {combineReducers} from 'redux';
import thunk from 'redux-thunk'
import { myReducer } from '../reducers/myReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  myReducer: myReducer,
  
})

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)