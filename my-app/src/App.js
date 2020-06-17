import React from 'react';
import Dummy from './Dummy';


function App() {
  return (
    // Nesting components is as simple as making it an HTML Tag, see 'Dummy' below
    // Props will allow us to pass data from parent component to child component
    <div className="App">
       <h1> My first React app! </h1>
       <p>Welcome :)</p>
       <Dummy name="Elton" age="20" major="CS"/>
       <Dummy name="Jon Carlo" age="19" major="CE"/>
    </div>
  );
}

export default App;
