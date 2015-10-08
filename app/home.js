import { create } from './actions/post'
import store from './stores/posts'

store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(create('hey'));
store.dispatch(create('woah'));
