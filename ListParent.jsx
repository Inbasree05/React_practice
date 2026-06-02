import React from 'react';
import ListChild from './ListChild';
function ListParent(){
    const persons=[
        {
            id:1,
            name:"sai",
            age:21
        },
        {
            id:2,
            name:"Inba",
            age:20
        },
        {
            id:3,
            name:"Rocky",
            age:22
        }
    ]
    const person=persons.map((person)=><ListChild person={person}/>);
    return(
        <div>{person}</div>
    )
}
export default ListParent;