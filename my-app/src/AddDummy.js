import React, {Component} from 'react'

class AddDummy extends Component {
    state = {
        name: null,
        age: null,
        major: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value // Think that this is like ninja['name'] getting index
        }) 
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addDummy(this.state);
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" onChange={this.handleChange}/>
                    
                    <label htmlFor="age">Age: </label>
                    <input type="text" id="age" onChange={this.handleChange}/>
                    
                    <label htmlFor="major">Major: </label>
                    <input type="text" id="major" onChange={this.handleChange}/>

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddDummy;