import React from 'react'
function FunctionClick(){
    function handleClick(){
        console.log("Button Clicked");
    }
    return(
        <>
        <button onClick={handleClick}>Click</button>
        </>
    )

}
export default FunctionClick;