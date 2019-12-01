import React from 'react';
import { NavLink,Link } from 'react-router-dom'
import './style/index.css'
class buttomNav extends React.Component {
   render() {
      return (
         <div className='flex buttom'>
            <div className='flex-item'>
               <NavLink exact to='/' activeClassName="selected">
                  <i className='icon iconfont icon-bangdingma'></i>
                  <div>首页</div>
               </NavLink>
            </div>
            <div className='flex-item' >
               <NavLink to='/my' activeClassName="selected">
                  <i className='icon iconfont icon-renwu'></i>
                  <div>我的</div>
               </NavLink>
            </div>
         </div>
      )
   }
}

export default buttomNav