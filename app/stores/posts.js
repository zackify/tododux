import createWithMiddleware from '../middleware/main'

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

export default createWithMiddleware(posts)
