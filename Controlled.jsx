import {useState,React} from 'react'
function Controlled(){
    const [name,setName]=useState("");
    const handleChange=(e)=>{
        setName(e.target.value);
    }
    return(
        <div>
            <input type="text" value={name} onChange={handleChange}/>
            <p>{name}</p>
        </div>
    )
}
export default Controlled;