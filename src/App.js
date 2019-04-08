import React, { Component } from 'react';
import './App.css';
import Form from './containers/Form';

class App extends Component {

  render() {
    const style = {
      textAlign: 'center'
    }
    return (
      <div style={style}>
        <h1>Horror of the year</h1>
        <main>
          <Form />
        </main>
      </div>
    );
  }
}

export default App;
