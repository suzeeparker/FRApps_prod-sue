import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <ul className="navbar">
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="index.html">Link 2</a>
        </li>
        <li>
          <a href="index.html">Link 3</a>
        </li>
      </ul>

      <h1>My React App</h1>

      <p>Welcome to my React App!</p>

      <p>
        It lacks images, but at least it has style. And it has links...</p>

      <p>More to come.</p>

      <address>Made in 2022 by myself.</address>
    </div>
  );
}

export default App;
