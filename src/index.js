import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as math from "./math"

console.log(math);

ReactDOM.render(
  <div>
    <ul>
      <li>{math.default}</li>
      <li>{math.doublePi()}</li>
      <li>{math.triplePi()}</li>
      <li></li>
      <li>{math.sum(5, 0)}</li>
      <li>{math.sub(10, 5)}</li>
      <li>{math.mult(1, 5)}</li>
      <li>{math.div(25, 5)}</li>
    </ul>
  </div>
  ,document.getElementById("root")
);
