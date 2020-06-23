import React, { Component } from 'react';
import {AddForm, TextBox, TodoContainer} from './app-styles';

class AddTodo extends Component {
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content:''
        })
    }
    

    render() {
        return (
            <TodoContainer>
                <AddForm onSubmit={this.handleSubmit}>
                    <label style={{marginBottom:10}}>Add new todo:</label>
                    <TextBox type="text" onChange={this.handleChange} value={this.state.content}/>
                </AddForm>
            </TodoContainer>
        )
    }
}

export default AddTodo;