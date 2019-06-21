import React from 'react';

const PriceOutput = ({latestPrice, change, changePercent}) => {
    return (
    <>
        <div className="header__price">
            <span>$ 160.03{latestPrice}</span>
            <div className="header__price--change">
                <span>^ 2.94{change}</span>
                <span>1.88%{changePercent}</span>
            </div>
        </div>
    </>
    );
}

export default PriceOutput;