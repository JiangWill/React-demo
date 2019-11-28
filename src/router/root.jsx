import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class root extends React.Component {
   constructor(props){
      super(props)
      this.setState = {}
   }
   render() {
      return <Router>
         <Switch>
            <Route path="/index">
               <div>index</div>
            </Route>
            <Route path="/shop">
               <div>shop</div>
            </Route>
         </Switch>
      </Router>
   }

}
export default root
