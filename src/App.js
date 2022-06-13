import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <div className="container-main">
      <h1>COUNTER</h1>
      <div className="index-class"></div>
      <div className="container-counter">
        <h1 className="counter">{ counter }</h1>
          <div className="actions">
            <button className="increase-button" onClick={increaseCounter}>Increase</button>
            <button className="decrease-button" onClick={decreaseCounter}>Decrease</button>
          </div>
          <button className="reset" onClick={resetCounter}>reset</button>
        </div>
    </div>
  );
}

export default App;
