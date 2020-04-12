import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopBlock from "./components/TopBlock/TopBlock";
import BottomBlock from "./components/BottomBlock/BottomBlock";
import  "./reducers/index";

function App() {


  return (
    <div className="App">
        <TopBlock />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
            И цвет заданный в стейте ={/* {store.getState().color}*/}
        </a>
          <BottomBlock />
      </header>

    </div>
  );
}

export default App;
