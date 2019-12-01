import React from 'react';
import BottomNav from '../conponments/bottomNav'

class layout extends React.Component {
   constructor(props){
      super(props)
      this.setState = {}
   }
   render() {
      return <div>{this.props.children}
         <BottomNav></BottomNav>
      </div>
   }

}
export default layout
