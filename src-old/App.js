import './App.css';
import {useState, useEffect} from "react";


const  App = () => {
    const [counter, setCounter] = useState(0);

    // This will run when counter changes
    useEffect(() => {
        alert('you change the counter to '+ counter)
    }, [counter]);

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount)=> prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount)=> prevCount + 1)}>+</button>
    </div>
  );
}

export default App;
