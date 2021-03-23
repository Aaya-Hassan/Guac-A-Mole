import React from 'react';
import { Button } from '../styles';
import { Link } from 'react-router-dom';

const ScoreScreen = (props) => {
  console.log(props)
  return (
    <div className="App">
      <h1>GAME OVER!</h1>
      <p>Your Score: {props.location.state}pts</p>
      <Button><Link to="/gameScreen">PLAY AGAIN</Link></Button>
    </div>
  );

}

export default ScoreScreen;