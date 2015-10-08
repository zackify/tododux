import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const createWithMiddleware = applyMiddleware(
  thunk
)(createStore);

export default createWithMiddleware
