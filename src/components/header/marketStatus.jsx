import React from 'react';
import {getDate} from '../../util/currentDate';

const MarketStatus = () => {

    return (
        <div>
            <span>Real-Time Price as of {getDate()}</span>
            <span>[image] Market [Status]</span>
        </div>
    );
}

export default MarketStatus;