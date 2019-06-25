import React from 'react';
import SearchInputContainer from './searchInputContainer';
import PriceOutput from '../header/priceOutput';

import '../header/header.css'

const SearchPriceLayout = ({latestPrice, change, changePercent}) => {

    return (
        <div className="header__search-layout">
            <SearchInputContainer />
            <PriceOutput change={change} latestPrice={latestPrice} changePercent={changePercent}/>
        </div>
    );
}

export default SearchPriceLayout;