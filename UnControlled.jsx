import {useRef} from 'react'
function UnControlled(){
    const inputRef=useRef();
    const OutputRef=useRef();
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(inputRef.current.value);
        OutputRef.current.textContent=inputRef.current.value;
    }
    return(
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={handleSubmit}>Submit</button>
            <p ref={OutputRef}></p>
        </div>
    )
}
export default UnControlled;