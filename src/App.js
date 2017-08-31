import React, { Component } from 'react';
import Name from './name';
class App extends Component{
  state={age:21}    //virtual dom ทำงานไวกว่า
 render(){  
  return(
    <div>
      <Name title="Sent1">
       &nbsp;   {this.state.age} 
      </Name>
      
      
      <Name title="Sent2"/>
      
      <Name title="Sent3"/>

      <button onClick={this.addAge}>click here!</button>
    </div>
  )
  
 }
addAge=()=>this.setState({age:this.state.age+1})

}
export default App ; 
//การบ้าน