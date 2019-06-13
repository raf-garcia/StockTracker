import React from 'react';

const keyStats = props => {
    console.log(props);
    return (
        <div>
            <h2>Key Stats</h2>
            <ul>
                <li>DayRange: {props.dayLow} - {props.dayHigh}</li>
            </ul>
        </div>
    );
}

export default keyStats;