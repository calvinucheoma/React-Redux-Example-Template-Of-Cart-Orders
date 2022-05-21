import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

//store - stores data, think of state
//reducer - function that is used to update state
import { legacy_createStore } from "redux";
import reducer from "./reducer";

export const store = legacy_createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  // cart setup

  return (
    <main>
      <Navbar/>
      <CartContainer />
    </main>
  );
}

export default App;
