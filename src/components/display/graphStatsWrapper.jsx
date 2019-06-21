import React from 'react';
import ChartContainer from '../chart/chartContainer';
import KeyStatsContainer from './keyStatsContainer';

const GraphStatsWrapper = () => {
    return(
        <div className="section-graph-stats">
            <ChartContainer />
            <KeyStatsContainer />
        </div>
    );
}

export default GraphStatsWrapper;