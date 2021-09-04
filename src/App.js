import React, { Component } from 'react';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <Header />
      </div>
    );
  }
}

export default App;