import React, {Component} from 'react';

class Dummy extends Component {
    render() {
        //console.log(this.props);

        // Destructuring, grab prop names and store in variables
        const{name, age, major} = this.props;

        return (
            <div className="dummy">
                <div> Name: {name} </div>
                <div> Age: {age} </div>
                <div> Major: {major}</div>
            </div>
        )
    }
}

export default Dummy;