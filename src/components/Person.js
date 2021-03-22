import React from 'react';

function Person({person}) {
    return (
        <div>
            <h2>My name is {person.name} and I'm {person.age}. I am
                also {person.skill}.</h2>

        </div>
    );
}

export default Person;