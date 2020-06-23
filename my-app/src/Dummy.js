import React from 'react';

const Dummies = ({dummies, deleteDummy}) => {
    const dummyList = dummies.map(dummy =>{
        return ( // Needs unique key for each item in list (id)
            // Needed arrow function becuase don't want to invoke function everytime; just on click
            <div className="dummy" key={dummy.id}>
                <div>Name: {dummy.name}</div>
                <div>Age: {dummy.age}</div>
                <div>Major: {dummy.major}</div>
                <button onClick={() => {deleteDummy(dummy.id)}}>Delete dummy</button>
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