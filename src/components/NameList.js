import React from 'react';
import Person from "./Person";

function NameList(props) {
    const names = ['Bruce', 'Clark', 'Diana','Bruce']
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 32,
            skill: "Batman"
        },
        {
            id: 2,
            name: 'Clark',
            age: 45,
            skill: 'Superman'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Wonderwoman'
        }
    ]
    const namesList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    const personList = persons.map(person => <Person key={person.id} person={person}/>)
    return (
        <div>
            {namesList}
        </div>
    );
}

export default NameList;