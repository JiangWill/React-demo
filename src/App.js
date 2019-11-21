import React from 'react';
import './App.css';
import Square from './square'
import Header from './header.js'
// import { Router, Route, Link } from 'react-router'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route,Link,useRouteMatch} from "react-router-dom";

function My(){
  // let march = useRouteMatch()
  // let { My } = ;
  console.log('路由1',useRouteMatch())
  return <div>123</div>
}

function App() {
  return (
    <div className="App">
      <Router>
          <div>
             <ul>
                <li><Link to="/squa">1</Link></li>
                <li><Link to="/header">2</Link></li>
                <li><Link to="/my/1">3</Link></li>
             </ul>
          </div>
          <Switch>
          <Route path="/squa">
            <Square />
          </Route>
          <Route path="/header">
            <Header />
          </Route>
          <Route path="/my/:id">
            <My />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
