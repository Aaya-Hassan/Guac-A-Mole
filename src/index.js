import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from 'react-router-dom';
import GameScreen from './components/GameScreen';
import ScoreScreen from './components/ScoreScreen';

ReactDOM.render(
  <BrowserRouter>
    <Route path="/homePage" component={App} />
    <Route path="/gameScreen" component={GameScreen} />
    <Route path="/scoreScreen" component={ScoreScreen} />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
