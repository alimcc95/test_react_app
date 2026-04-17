// First example
const  App = () => {
    const name = "Jane";
    const isNameShowing = true;
  
    return (
      <div className="App">
        <h1>Hello, {isNameShowing? name : "someone"}!</h1>
  
        {name ? (
          <h1>Name</h1>
        ): (
          <>
          <h1>Test</h1>
          <h2>There is no name</h2>
          </>
        )}
      </div>
    );
  }
  
  export default App;
  

// Props example

import './App.css';

const Person = (props) => {
  return(
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  )
}


const  App = () => {
  const name = "Jane";
  const isNameShowing = true;

  return (
    <div className="App">
      <Person name='John' lastName='Doe' age='20' />
      <Person name={'Jane'} lastName='Test' age={20+5} />
    </div>
  );
}

export default App;



// Using state

import './App.css';
import {useState} from "react";


const  App = () => {
    const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount)=> prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount)=> prevCount + 1)}>+</button>
    </div>
  );
}

export default App;



// Use effect


            // This will only run everytime something happen on screen
            useEffect(() => {
                alert('you change the counter to '+ counter)
            });
  
          // This will only run on page load
          useEffect(() => {
            alert('you change the counter to '+ counter)
        }, []);
  
      // This will run when counter changes
      useEffect(() => {
          alert('you change the counter to '+ counter)
      }, [counter]);
  