import React from 'react';

const PriceOutput = ({latestPrice, change, changePercent}) => {
    return (
    <>
        <div className="header__price">
            <span>{latestPrice}</span>
            <div className="header__price--change">
                <span>{change}</span>
                <span>{changePercent}</span>
            </div>
        </div>
    </>
    );
}

export default PriceOutput;