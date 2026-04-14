import { useState } from "react";
function Test() {
  const [number, setNumber] = useState(0);
  const style = {
    button: {
      backgroundColor: "red",
      margin: "10px",
      padding: "10px",
    },
  };
  // should be js
  const handleAdd = () => {
    setNumber((c) => c + 1);
  };
  const handleMinus = () => {
    setNumber((c) => c - 1);
  };
  const handleReset = () => {
    setNumber(0);
  };
  return (
    // anything inside the return must be only html
    <>
      <h1>this is text</h1>
      <h1>this is sewar</h1>
      {/* to write js code inside return, must be in {} */}
      <p>your number: {number}</p>
      <button style={style.button} onClick={handleAdd}>
        +
      </button>
      <button style={style.button} onClick={handleMinus}>
        -
      </button>
      <button style={style.button}>+ 10</button>
      {/* jump 10 */}
      <button style={style.button}>- 10</button>
      {/* minus 10 */}
      <button style={style.button}>Set 100</button>
      {/* reset to 100 */}
      <button style={style.button} onClick={handleReset}>
        Reset
      </button>
    </>
  );
}

export default Test;
