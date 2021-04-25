import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter} from "react-router-dom";
import React from "react";
import HeaderContain from "./Components/Header/HeaderContain";
import Main from "./Components/Main/Main";
import Test from "./Components/Scan/Scan";
import MyApp from "./Components/Document/Document";
import Apps from "./Components/Document/DocumentConfirmed";

const App = () => {
  return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContain/>
          <div className='app-wrapper-content'>
              <Route exact path='/' render={() => <Main /> } />
              <Route exact path='/scanner' render={() => <Test /> } />
              <Route exact path='/docconf' render={() => <MyApp /> } />
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
