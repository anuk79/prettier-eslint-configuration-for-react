import React from "react";
import { render } from "react-dom";

const App = () => {
  return (
    <main>
      <h1>Welcome</h1>
      <p>
        Let's practice configuration of prettier and eslint plugins for a React
        application from scratch.
      </p>
    </main>
  );
};

render(<App />, document.getElementById("root"));
