import { useState } from "react";
import "./App.css";
import Container from "./Components/Container";
import Post from "./Components/Post";
import data from "./data";

function App() {
  return (
    <div>
      <h1 id="title">Mattia Formichetti's Blog</h1>
      <Container data={data} />
    </div>
  );
}

export default App;
