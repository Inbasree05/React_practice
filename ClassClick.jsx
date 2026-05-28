import React,{Component} from 'react'
class ClassClick extends Component{
    handleClick(){
        console.log("Class Button Clicked");
    }
    render(){
        return(
            <>
            <button onClick={this.handleClick}>Click</button>
            </>
        )
    }
}
export default ClassClick