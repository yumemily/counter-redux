import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Bitna from './components/Bitna'

function App() {
  let countNum = useSelector(state => state.countNum)
  let color = useSelector(state => state.color)
  let boxColors = useSelector(state => state.boxColors)

  let dispatch = useDispatch();

  let incrementNumber = () => {
    dispatch({ type: 'INCREMENT' })
  }

  let decrementNumber = () => {
    dispatch({ type: 'DECREMENT' })
  }

  let reset = () => {
    dispatch({ type: 'RESET' })
  }

  const renderBoxes = () => {
    let tempArray = []; //array of divs
    Array.from(Array(countNum)).forEach((e, i) => { //executes provided fx for each array element
      const boxColor = boxColors[i] || color;
      tempArray.push(
        <div
          key={i}
          style={{
            margin: 5,
            width: 200,
            height: 200,
            backgroundColor: boxColor
          }}
        >
          <h1>Colorful box</h1>
          <h3>{boxColor}</h3>
          <input
            onChange={e =>
              dispatch({
                type: "SPECIFIC_NEW_COLOR",
                payload: { color: e.target.value, index: i }
              })
            }>
          </input>
          <button onClick={e =>
            dispatch({
              type: "SPECIFIC_NEW_COLOR",
              payload: { color: getRandomColor(), index: i }
            })
          }>click tochange me to a random color! why am i not rerendering?! add another box and i'll change colors :(</button>
        </div>
      );
    });
    console.log(tempArray)
    return tempArray;
  };

  function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let randomColor = '#';
    for (var i = 0; i < 6; i++) {
      randomColor += letters[Math.floor(Math.random() * 16)];
    }
    return randomColor;
  }

  let setRandomColor = () => {
    let x = getRandomColor();
    dispatch({ type: 'NEW_COLOR', payload: x })
  }

  let newRandomColor = () => {
    let x = getRandomColor();
    dispatch({ type: 'RANDOM', payload: x })
  }

  // let setRandomColorSpecific = (i) => {
  //   let x = getRandomColor();
  //   dispatch({ type: 'SPECIFIC_NEW_COLOR', color: x, index: i })
  // }
  console.log(boxColors)
  return (
    <div className='App'>
      <Bitna />
      {/* <h2>{countNum}</h2> */}
      <div >
        <button onClick={() => incrementNumber()}>Increment</button>
        <button onClick={() => decrementNumber()}>Decrement</button>
        <button onClick={() => reset()}>Reset</button>
      </div>
      New color:<input
        onChange={e =>
          dispatch({ type: "NEW_COLOR", payload: e.target.value })
        }>
      </input>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>{renderBoxes()}</div>
      <button onClick={() => setRandomColor()}>Wheeeeeee</button>
    </div>
  );
}

export default App;
