import React from 'react';
import logo from './logo.svg';
import Home from "./componentes/home"
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './componentes/signIn';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <Home />
    //   </header>
    // </div>
    <div>
      {/* <Home/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="SignIn" element={<SignIn/>}/>
        
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
