import React, {useRef} from 'react';
import './App.css';

function App() {
  let inputRef = useRef(null)

  const handelInput = () => {
    console.log("function call")
    inputRef.current.value = '100'
    // inputRef.current.focus();
    // inputRef.current.style.color="red"
    inputRef.current.style.display="none"
  }

  return (
    <div className="App">
      <h1>useRef</h1>
      <input type='text' ref={inputRef} />
      <button onClick={handelInput}>Handle Input </button>
    </div>
  );
}

export default App;
