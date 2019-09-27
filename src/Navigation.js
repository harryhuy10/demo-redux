import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './App';
import Childrent from './components/childrent';
import Clone from './components/clone';
import Scsstest from './components/scsstest';
function Navigation() {
  return (
    <Router>
      <div>
        {/* <Header /> */}

        <Route exact path="/" component={App} />
        <Route path="/child" component={Childrent} />
        <Route path="/clone" component={Clone} />
        <Route path="/scss" component={Scsstest} />
      </div>
    </Router>
  );
}

export default Navigation;