import React from 'react';
import './App.css';
import Div from './components/RecusiveDiv';
import CustomHook from './components/CustomHook';
import LazyAndSuspense from "./components/LazyAndSuspense";

function App() {
  return (
    <div className="App">
      <p>Part 1: Imrecursive div</p>
      <Div />
      <p>Part 3: lazy and suspense</p>
      <LazyAndSuspense/>
      <p>Part 2: custom hook</p>
      <CustomHook/>
    
    </div>
  );
}

export default App;
