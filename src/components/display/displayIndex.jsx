import React from 'react';
import ChartContainer from '../chart/chartContainer';
import KeyStatsContainer from './keyStatsContainer';

const displayIndex = () => {
    return(
        <div>
            <ChartContainer />
            <KeyStatsContainer />
        </div>
    );
}

export default displayIndex;