import React from "react"


class Todo extends React.Component{
    render(){
        return(
            <div>
                <h1>Todo  Component</h1>
                <h2>{this.props.disco}</h2>
               
            </div>

        )
    }
}


export default Todo