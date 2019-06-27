import React from 'react';
import SearchInputContainer from '../search/searchInputContainer';
import PriceOutput from './priceOutput';
import './header.css'

const SearchPriceLayout = ({latestPrice, change, changePercent}) => {

    return (
        <div className="header__search-layout">
            <SearchInputContainer />
            <PriceOutput change={change} latestPrice={latestPrice} changePercent={changePercent}/>
        </div>
    );
}

export default SearchPriceLayout;