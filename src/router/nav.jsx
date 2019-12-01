import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from '../container/index/index'
import My from '../container/my/my'

class nav extends React.Component {
   constructor(props) {
      super(props)
      this.setState = {}
   }
   render() {
      return (
         <Switch>
            <Route exact path="/" component={Index}>
            </Route>
            <Route path="/my" component={My}>
            </Route>
         </Switch>
      )
   }

}
export default nav
