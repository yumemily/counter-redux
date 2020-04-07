import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider, useSelector } from 'react-redux';

let initialState = {
  countNum: 0,
  color: 'red', // initial color
  boxColors : [null],
}

function countReducer (state=initialState,action){
  const newState = {...state}
  if(action.type === 'INCREMENT'){
    newState.countNum ++;
  }else if(action.type === 'DECREMENT' && state.countNum > 0){
    newState.countNum --;
  }else if(action.type === 'NEW_COLOR'){
    newState.color = action.payload;
  }else if(action.type ==='SPECIFIC_NEW_COLOR'){
    let colors = state.boxColors
    colors[action.payload.index] = action.payload.color
    newState.boxColors = colors;
  }else if(action.type ==='RESET'){
    newState.countNum = 0;
    newState.color = 'red';
    newState.boxColors = [];
  }
  return newState
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
