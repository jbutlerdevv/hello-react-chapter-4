import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App({name}){

  // Array destructuring for status value
  const [status, setStatus] = useState("Open");

  return (
    <div>
      <h1>Status: {status}</h1>
      <button conClick={() => setStatus("Closed")}>
        Closed
      </button>
    </div>
  );
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);