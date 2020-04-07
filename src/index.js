import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider} from 'react-redux';

const initialState = {
  count: 0,
  boxes: [],
  background: "red"
};

function countReducer(state = initialState, action) {
  if (action.type === "INCREMENT") {
    state.count++;
    state.boxes.push("");
  } else if (action.type === "DECREMENT") {
    if (state.count === 0) {
      state.count = 0;
    } else {
      state.count--;
      state.boxes.pop();
    }
  } else if (action.type === "RESET") {
    state.count = 0;
    state.boxes = [];
    state.background = 'red';
  } else if (action.type === "CHANGE_COLOR") {
    state.background = action.payload;
  } else if (action.type === "SINGLE_COLOR") {
    state.boxes[action.payload.id] = action.payload.singleColor;
  }
  return state;
}

const store = createStore(countReducer);

console.log(store.getState())

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
