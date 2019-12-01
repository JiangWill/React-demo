import React from 'react';


class layout extends React.Component {
   constructor(props){
      super(props)
      this.setState = {}
   }
   render() {
      return <div>{this.props.children}</div>
   }

}
export default layout
