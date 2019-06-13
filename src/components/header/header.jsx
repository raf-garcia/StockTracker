import React from 'react';
import SearchInputContainer from './searchInputContainer';

const header = (props) => {
    let priceOutput;
    let companyTags;
    if (typeof props.change != "undefined"){
        priceOutput = 
        <div>
            <span>latestPrice: {props.latestPrice} </span>
            <span>change: {props.change} </span>
            <span>changePercent: {props.changePercent}</span>
        </div>

        companyTags = 
            <div>
                <span>exchange: {props.exchange}</span> <span>sector: {props.sector}</span>
            </div>
    }
    return (
        <div>
            <SearchInputContainer />
            {priceOutput}
            {companyTags}
        </div>        
    );
}

export default header;