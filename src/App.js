import React from "react";
import "./App.css";
import Counter from "./components/Box";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const count = useSelector(state => state.count);
  const boxes = useSelector(state => state.boxes);
  const dispatch = useDispatch();
  const renderBoxes = () =>
    boxes && boxes.map((color, idx) => <Counter id={idx} />);

  const handleChange = e => {
    dispatch({ type: "CHANGE_COLOR", payload: e });
  };
  console.log(boxes);
  return (
    <div className="App">
      <div>
      <h2>{count}</h2>
      <button
        style={{ marginRight: 20 }}
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment
      </button>
      <button
        style={{ marginRight: 20 }}
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <div>change color:<input type="text" onChange={e => handleChange(e.target.value)}/></div>
      </div>
      <div style={{display:'flex', flexWrap:'wrap'}}>{renderBoxes()}</div>
    </div>
  );
}

export default App;