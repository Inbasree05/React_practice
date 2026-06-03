import React from 'react';
function List(){
    const names=["sai","Inba","Rocky"];
    return(
        <div>
            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul> 
        </div>
    )
}
export default List;