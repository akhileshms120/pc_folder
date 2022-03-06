import logo from './logo.svg';
import './App.css';
import React from "react"
import Todo from  "./Component/Todo"
import Counter from './Component/Counter';



class App extends React.Component{
  
  state={
    myString:"Helo"
  };
  
   handleChange=()=>{
     this.setState({
       disco:"media"
     })
   }
  render(){
    return(
      <div style={{flex:1,backgroundColor:'green',justifyContent:'center',alignItems:'center'}}>
        <h5>{this.state.myString}</h5>
        <button onClick={this.handleChange}>Change Text</button>
        <Todo disco={this.state.disco}/>
        <Counter/>
      </div>
    )
  }

}
export default App

