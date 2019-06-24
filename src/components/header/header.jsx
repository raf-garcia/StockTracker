import React from 'react';
import HeaderTagsLayout from './headerTagsLayout';
import LogoTabsLayout from './logoTabsLayout';
import SearchPriceLayout from '../search/searchPriceLayout';

import './header.css'

const header = ({latestPrice, change, changePercent, exchange, sector, lastUpdate}) => {
console.log();
    return (
        <div className="header-wrapper">
            <LogoTabsLayout/>
            <SearchPriceLayout latestPrice={latestPrice} change={change} changePercent={changePercent}/>
            <HeaderTagsLayout lastUpdate={lastUpdate} exchange={exchange} sector={sector}/>
        </div>
    );
}

export default header;