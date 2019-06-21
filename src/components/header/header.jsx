import React from 'react';
import SearchInputContainer from '../search/searchInputContainer';
import PriceOutput from './priceOutput';
import CompanyTags from './companyTags';

const header = ({latestPrice, change, changePercent, exchange, sector}) => {

    return (
        <div>
            <h1>Adaptive</h1>
            <SearchInputContainer />
            <PriceOutput change={change} latestPrice={latestPrice} changePercent={changePercent}/>
            <CompanyTags exchange={exchange} sector={sector}/>
        </div>        
    );
}

export default header;