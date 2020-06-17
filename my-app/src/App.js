import React from 'react';
import Dummy from './Dummy';


function App() {
  return (
    // Nesting components is as simple as making it an HTML Tag, see 'Dummy' below
    <div className="App">
       <h1> My first React app! </h1>
       <p>Welcome :)</p>
       <Dummy/>
    </div>
  );
}

export default App;
