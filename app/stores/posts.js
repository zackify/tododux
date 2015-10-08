import { createStore } from 'redux';

function posts(state = [], action) {

  switch (action.type) {
    case 'create':
      return [{
      text: action.text,
      completed: false
    }, ...state];
    default:
      return state;
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
export default createStore(posts)
