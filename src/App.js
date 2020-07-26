import React from 'react';
import Landing from './pages/landing/Landing';
import Signup from './pages/signup/Signup';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import 'antd/dist/antd.css';

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
