import { combineReducers } from 'redux';
import { products, meals, date } from './reducers';

export const reducers = combineReducers({
  products,
  meals,
  date,
});
