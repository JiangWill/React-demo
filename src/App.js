import React from 'react';
import './App.css';
// import { Router, Route, Link } from 'react-router'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route,Link,useRouteMatch} from "react-router-dom";
import Root from './router/root'

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/">
                <Root />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
