import React from 'react';
function ListChild({person}){
    return(
        <div>
            <h1>Hello,i am {person.name}</h1>
            <h2>My age is {person.age}</h2>
        </div>
    )
}
export default ListChild;