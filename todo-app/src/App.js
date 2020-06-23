import React from 'react';
import {Button, AppContainer} from "./app-styles";
import {Todos} from './Todos'
import AddTodo from './AddForm'

class App extends React.Component {
  state = {
    todos: []
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter( todo => {
      return todo.id !== id;
    })
    
    this.setState({
      todos: todos
    })
  }

  addTodo = (todo) => {
    let todos = [...this.state.todos, todo];
    todo.id = Math.random();
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <AppContainer className="App">
        <h1 style={{color:"#000000"}}>Tasks by Jon</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </AppContainer>
    );
  }
}

export default App;
