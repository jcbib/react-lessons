import React from 'react';

const Dummies = ({dummies}) => {
    // const dummyList = dummies.map(dummy =>{
    //     if (dummy.age > 20) {
    //         return ( // Needs unique key for each item in list (id)
    //             <div className="dummy" key={dummy.id}>
    //                 <div>Name: {dummy.name}</div>
    //                 <div>Age: {dummy.age}</div>
    //                 <div>Major: {dummy.major}</div>
    //             </div>
    //         )
    //     } else {
    //         return null;
    //     }
    // })

    // const dummiesList = dummies.map(dummy => {
    //     return dummy.age > 20 ? (
    //         <div className="dummy" key={dummy.id}>
    //             <div>Name: {dummy.name}</div>
    //             <div>Age: {dummy.age}</div>
    //             <div>Major: {dummy.major}</div>
    //         </div>
    //     ) : null;
    // })
    
    // return ( 
    //     <div className="dummy-list">
    //         {dummiesList}
    //     </div>
    // )


    return (
        <div className="dummy-list">
            {
                // Replaced {dummiesList} with the code assigned to dummiesList
                // Can use ternary operator for cleaner code
                dummies.map(dummy => {
                    return dummy.age > 20 ? (
                        <div className="dummy" key={dummy.id}>
                            <div>Name: {dummy.name}</div>
                            <div>Age: {dummy.age}</div>
                            <div>Major: {dummy.major}</div>
                        </div>
                    ) : null;
                })
            }
        </div>
    )
}


export default Dummies;