import React, { Component } from 'react';
import Dummies from './Dummy';
import AddDummy from './AddDummy';

class App extends Component {
  state = {
    dummies: [
      {name: 'Shulk', age: 10, major: 'CS', id: 1},
      {name: 'Cloud', age: 30, major: 'Gender Studies', id: 2},
      {name: 'Marth', age: 35, major: 'Geography', id: 3},
    ]
  }
  
  addDummy = (dummy) => {
    dummy.id = Math.random();
    let dummies = [...this.state.dummies, dummy]; //Spread operator (...) takes the above array and spreads them out into their individual objects and putting it into new array
    this.setState({
      //dummies: this.dummies.push(dummy); // Can't do this, already altering state
      dummies: dummies
    })
  }

  deleteDummy = (id) => {
    // Filter will filter out items in array
    let dummies = this.state.dummies.filter(dummy => {
      return dummy.id !== id;
    })
    this.setState({
      dummies: dummies
    })
  }

  render() {
    return (
      // Nesting components is as simple as making it an HTML Tag, see 'Dummy' below
      <div className="App">
        <h1> My first React app! </h1>
        <p>Welcome :)</p>
        <Dummies deleteDummy={this.deleteDummy} dummies={this.state.dummies}/>
        <AddDummy addDummy={this.addDummy}/>
      </div>
    )
  }
}

export default App;
