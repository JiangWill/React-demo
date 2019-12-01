import React from 'react';

import {HashRouter } from "react-router-dom";
import SubRouter from './nav'
import Layout from '../container/layout.js'
class root extends React.Component {
   constructor(props){
      super(props)
      this.setState = {}
   }
   render() {
      return (
         <HashRouter>
            <Layout path='/'>
               <SubRouter></SubRouter>
            </Layout>
         </HashRouter>
      )
         
   }
}
export default root
