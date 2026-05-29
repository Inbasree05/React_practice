import React,{Component} from 'react'
import ChildComponent from './ChildComponent'
class ParentComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            Message:'Sai'
        }
        this.greetParent=this.greetParent.bind(this);
    }
    greetParent(){
        alert(`Hello ${this.state.Message}`);
    }
    render(){
        return(
            <div>
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}
export default ParentComponent;
