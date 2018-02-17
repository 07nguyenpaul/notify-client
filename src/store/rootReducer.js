import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

// import count from './count/reducer';

const root = combineReducers({
  router: routerReducer,
  database: {},
  // count,
});

export default root;
