import React from 'react';

const MarketStatus = ({lastUpdate}) => {

    return (
        <div>
            <span>Real-Time Price as of {lastUpdate}</span>
            <span>[image] Market [Status]</span>
        </div>
    );
}

export default MarketStatus;