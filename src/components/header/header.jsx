import React from 'react';
import SearchInputContainer from '../search/searchInputContainer';
import PriceOutput from './priceOutput';
import CompanyTags from './companyTags';
import { AdaptiveLogo } from './adaptiveLogo';

const header = ({latestPrice, change, changePercent, exchange, sector}) => {

    return (
        <div>
            <AdaptiveLogo />
            <SearchInputContainer />
            <PriceOutput change={change} latestPrice={latestPrice} changePercent={changePercent}/>
            <CompanyTags exchange={exchange} sector={sector}/>
        </div>        
    );
}

export default header;