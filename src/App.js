import React from 'react';
import './App.css';
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          
        <Route path="/search">
            <h1>This is a search engine</h1>
          </Route>
          <Route path="/"><Home /></Route>
          






        </Switch>
       </Router>
      
    </div>
  );
}

export default App;
