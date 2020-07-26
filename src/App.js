import React from 'react';
import Landing from './landing/Landing';
import Signup from './Signup/Signup';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
