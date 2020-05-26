import React, { Component } from 'react';
import moment from 'moment';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h2>Welcome to</h2>
        <h1>Isaia Wariner's Portfolio</h1>
        <h2></h2>
    <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
      </div>
    );
  }
}
