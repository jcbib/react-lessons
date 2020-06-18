import React from 'react';

const Dummies = ({dummies}) => {
    // Use functional components when we are not concerned with state; concerned with UI
    // const{ dummies } = props; can put directly in parameters for destructuring
    const dummyList = dummies.map(dummy =>{
        return ( // Needs unique key for each item in list (id)
            <div className="dummy" key={dummy.id}>
                <div>Name: {dummy.name}</div>
                <div>Age: {dummy.age}</div>
                <div>Major: {dummy.major}</div>
            </div>
        )
    })
    return (
        <div className="dummy-list">
            {dummyList}
        </div>
    )
}


export default Dummies;