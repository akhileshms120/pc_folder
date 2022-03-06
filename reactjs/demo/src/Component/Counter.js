import React from "react"

class Counter extends React.Component{
    state={
        counter:0
    };
    onIncrement=()=>{
        this.setState({
            counter:this.state.counter + 1
        })
    };

    

    
    render(){
        return(
            <div>
                <h1>Counter Component</h1>
                <h2>{this.state.counter}</h2>
                <button onClick={this.state.onIncrement}>Click +</button>
                <button onClick={this.firstClick}>Click -</button>
            </div>
        )
    }
}

export default Counter