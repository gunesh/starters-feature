import { createStore, combineReducers } from 'redux';
import rootReducer from './reducers/rootReducer';

export default function configureStore() {
  return createStore(
    combineReducers({
      ...rootReducer,
    }),
    {}
  );
}
