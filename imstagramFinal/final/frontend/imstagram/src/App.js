import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import NavBar from './Components/NavBar'

function App() {
  return (
    <div className="App">
      Imstagram "The imitation of Instagram"

      <Switch>
        <Route exact path={"/"}>Landing Page</Route>
        <Route exact path ={"/posts"}>Explore Page</Route>
        

      </Switch>
    </div>
  );
}

export default App;
