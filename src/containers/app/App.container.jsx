import React from "react";
import firebase, { FirebaseContext } from "../../firebase/index";
import useAuth from "../../hooks/useAuth";
// npm i -s react-router-dom

function App({ children }) {
  const user = useAuth();
  // BrowserRouter is a Higher Order Component
  return (
    <FirebaseContext.Provider value={{ firebase, user }}>
      <div className="container">{children}</div>
    </FirebaseContext.Provider>
  );
}

export default App;
