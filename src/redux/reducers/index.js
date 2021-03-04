import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import movieReducers from './movieReducers';

const rootReducers = combineReducers({
  movies: movieReducers,
  errors: errorReducer
});

export default rootReducers;
