import createWithMiddleware from '../middleware/main'
import Immutable from 'immutable'

function posts(state = Immutable.List(), action) {

  switch (action.type) {
    case 'create':
      return state.unshift({text: action.text, completed: false})
    case 'delete':
      return state.delete(action.index)
    default:
      return state;
  }
}

export default createWithMiddleware(posts)
