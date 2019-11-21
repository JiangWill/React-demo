import React from 'react'

class Square extends React.Component{
   constructor(props){
      super(props)
      this.setState = {}
   }
   selectBox(row,colu,e){
      console.log('我被点击了',row,colu,e)
   }
   propChild(){
      console.log('传递给自组件')
   }
   render(){
      let row = this.props.row || 3
      let colu = this.props.colu || 3
      let list = ()=>{
         let res = []
         for(let i = 0;i<row;i++){
            for(let j=0;j<colu;j++)
            res.push(<div className='border' key={i +'' + j} onClick={this.selectBox.bind(this,i,j)}>{i}{j}</div>)
         }
         return res
      }
      return <div>
               <div className='boxWrap'>{list()}</div>
             </div>
   }
}
export default Square