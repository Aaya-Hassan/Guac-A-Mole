import React, { Component } from "react";
import { Border } from "../styles";
import Holes from "./Holes";
import { Redirect } from "react-router-dom";

class GameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { time: {}, seconds: 120, scores: 0 };
    this.timer = 0;
    this.countDown = this.countDown.bind(this);
    this.setScore = this.setScore.bind(this);
  }

  secondsToTime(secs) {
    let minutes = parseInt(secs / 60, 10)
    let seconds = parseInt(secs % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let obj = {
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    this.timer = setInterval(this.countDown, 1000);
  }

  countDown() {
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    if (seconds === 0) {
      clearInterval(this.timer);
    }
  }

  setScore(score) {
    this.setState({
      scores: score
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.seconds !== 0 ? (
          <>
            <h3>Time Left:
              {this.state.seconds <= 10 ? (
                <span className="lastTenSec"> {this.state.time.m}:{this.state.time.s} </span>
              ) : (
                <span> {this.state.time.m}:{this.state.time.s} </span>
              )}
            min</h3>
            <h3>Score: {this.state.scores}pts</h3>
            <Border>
              <Holes callback={this.setScore} />
            </Border>
          </>
        ) : (
          <Redirect to={{
            pathname: "/scoreScreen",
            state: this.state.scores
          }} />
        )}

      </div>
    )
  }

};

export default GameScreen;