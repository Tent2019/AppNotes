import { createStore } from 'redux';
import { reducers } from '../reducers/reducers';

const initialState = {
  notes: []
}

let notes = localStorage.getItem('notes')
if (notes) {
  initialState.notes = JSON.parse(notes)
}

export default createStore(
  reducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

