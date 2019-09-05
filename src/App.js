import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sluth from '../src/Homepage/homepage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Sluth}/>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
