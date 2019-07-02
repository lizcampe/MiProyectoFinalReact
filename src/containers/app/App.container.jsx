import React from 'react';
// npm i -s react-router-dom


function App({children}) {
  // BrowserRouter is a Higher Order Component
  return (
   <div className="container">
     {children}
   </div>
  );
}

export default App;
