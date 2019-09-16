import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './App';
import Childrent from './components/childrent';

function Navigation() {
  return (
    <Router>
      <div>
        {/* <Header /> */}

        <Route exact path="/" component={App} />
        <Route path="/child" component={Childrent} />
        
      </div>
    </Router>
  );
}

export default Navigation;