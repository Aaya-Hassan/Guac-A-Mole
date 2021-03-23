import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../styles';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>GUAC-A-MOLE</h1>
        <p>Make the fatest and most 
          <br/> delicious guacamole</p>
        <Button><Link to="/gameScreen">START</Link></Button>
      </div>
    );
  };
}

export default HomePage;