import { combineReducers, createStore } from 'redux';
import { catalogReducer } from './reducers/catalogReducer';

const reducers = combineReducers({
  catalog: catalogReducer,
});

export default createStore(reducers);
