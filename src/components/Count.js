import React from 'react';

const Count = ({ value }) => {
    console.log("taetae")

    return (
        <div>
            <h1>Count is : {value}</h1>
        </div>
    );
};

export default React.memo(Count);