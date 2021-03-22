import React from 'react';

function Columns(props) {
    const items = [{
        id: 1,
        title: "Ryan"
    },
        {
            id: 2,
            title: "Todd"
        }
    ]
    return (
        <>
            {
                items.map(item=>(
                    <React.Fragment key={item.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            }
        </>
    );
}

export default Columns;
