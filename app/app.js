import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

import { connect } from 'react-redux';
import { addTodo } from './actions/post'
import store from './stores/posts'

class App extends React.Component {
  render() {
    console.log(this.props)
    let { dispatch, posts } = this.props
    return (
      <div>
        <AddTodo
          onAddClick={text =>
            dispatch(addTodo(text))
        }/>
        <TodoList
          todos={posts || []}
          onTodoClick={index =>
            console.log('todo clicked', index)
          } />
      </div>
    );
  }
}

function select(state) {
  return {
    posts: state
  }
}


export default connect(select)(App);
