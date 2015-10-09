import 'isomorphic-fetch'

export function addTodo(text){
  // return dispatch => {
  //   fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk')
  //   .then(response => response.json())
  //   .then(weather => dispatch({
  //     type: 'create',
  //     text: `${text} current temp: ${weather.main.temp}`
  //   }))
  // }
  return {
    type: 'create',
    text
  }
}

export function removeTodo(index){
  return {
    type: 'delete',
    index
  }
}
