import React from 'react';
import './index.css'

class headNav extends React.Component {
   render() {
      return (
         <div className='header flex'>
            <div className='position'>杭州</div>
            <div className='flex-item search'><input type="text"/></div>
         </div>
      )
   }

}
export default headNav
