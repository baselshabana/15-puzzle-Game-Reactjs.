import "./App.css";
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import Board from "./Game";
import { updateURLParameter } from "./helpers";
import { useState, useEffect } from "react";

function App() {
  const [imageURL, setImageURL] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("img")) {
      setImageURL(urlParams.get("img"));
    }
  }, []);

  const handleImageChange = (e) => {
    setImageURL(e.target.value);
    window.history.replaceState(
      "",
      "",
      updateURLParameter(window.location.href, "img", e.target.value)
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>15-Puzzle Game</h1>
        <Board imageURL={imageURL} />

      </header>
    </div>
  );
  
}

export default App;
