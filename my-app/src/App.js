import React, { Component } from 'react';
import Dummies from './Dummy';


class App extends Component {
  state = {
    dummies: [
      {name: 'Shulk', age: 10, major: 'CS', id: 1},
      {name: 'Cloud', age: 20, major: 'Gender Studies', id: 2},
      {name: 'Marth', age: 35, major: 'Geography', id: 3},
    ]
  }
  render() {
    return (
      // Nesting components is as simple as making it an HTML Tag, see 'Dummy' below
      <div className="App">
        <h1> My first React app! </h1>
        <p>Welcome :)</p>
        <Dummies dummies={this.state.dummies}/>
      </div>
    )
  }
}

export default App;
