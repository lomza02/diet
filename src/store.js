import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducers } from './reducer';

export const store = createStore(reducers, composeWithDevTools());
