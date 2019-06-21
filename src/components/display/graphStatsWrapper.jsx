import React from 'react';
import ChartContainer from '../chart/chartContainer';
import KeyStatsContainer from './keyStatsContainer';

const GraphStatsWrapper = () => {
    return(
        <div>
            <ChartContainer />
            <KeyStatsContainer />
        </div>
    );
}

export default GraphStatsWrapper;