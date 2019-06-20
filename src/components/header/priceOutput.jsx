import React from 'react';

const PriceOutput = ({latestPrice, change, changePercent}) => {
    return (
    <>
        <span>latestPrice: {latestPrice} </span>
        <span>change: {change} </span>
        <span>changePercent: {changePercent}</span>
    </>
    );
}

export default PriceOutput;