import './App.css';
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import Board from "./Game";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      <h1>15-Puzzle Game</h1>
      <Board  />
      </header>
    </div>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //     <Board>

  //     </Board>
      
      
  //     {/* <div>
  //       <Container>
  //       <Row>
  //         <Col>1</Col>
  //         <Col>2</Col>
  //         <Col>3</Col>
  //         <Col>4</Col>
  //       </Row>
  //       <Row>
  //         <Col>5</Col>
  //         <Col>6</Col>
  //         <Col>7</Col>
  //         <Col>8</Col>
  //       </Row>
  //       <Row>
  //         <Col>9</Col>
  //         <Col>10</Col>
  //         <Col>11</Col>
  //         <Col>12</Col>
  //       </Row>
  //       <Row>
  //         <Col>13</Col>
  //         <Col>14</Col>
  //         <Col>15</Col>
  //         <Col>"</Col>
  //       </Row>
  //       </Container>
  //     </div> */}
  //     </header>
  //   </div>
  // );
}

export default App;
