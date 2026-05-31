import React from 'react'
class Loggin extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loggin:true
        }
    }
    render(){
        //even though it shows correct output but for function call and if else like that it show some warning in console not showing any error but to use varaible is a good practice to avoid that warning
        // if(this.state.loggin){
        //     return(
        //         <div>Welcome Sai</div>
        //     )
        // }
        // else{
        //     return(
        //         <div>Welecome Guests</div>
        //     )
        // }
        // let message;
        // if(this.state.loggin){
        //     message=<div>Welcome Sai</div>
        // }
        // else{
        //     message=<div>Welcome Guests</div>
        // }
        // return(
        //     <div>{message}</div>
        // )
        //Ternary Operator
        // return this.state.loggin?(
        //     <div>Welcome Sai</div>
        // ):(
        //     <div>Welcome Guests</div>
        // )
        //Another way to do it is using short circuit operator
        return this.state.loggin && <div>Welcome Sai</div>
    }
}
export default Loggin;