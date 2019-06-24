import React from 'react';
import HeaderTagsLayout from './headerTagsLayout';
import LogoTabsLayout from './logoTabsLayout';
import SearchPriceLayout from './searchPriceLayout';

import './header.css'

const header = ({latestPrice, change, changePercent, exchange, sector}) => {

    return (
        <div className="header-wrapper">
            <LogoTabsLayout/>
            <SearchPriceLayout/>
            <HeaderTagsLayout exchange={exchange} sector={sector}/>
        </div>
    );
}

export default header;