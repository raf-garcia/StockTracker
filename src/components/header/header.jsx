import React from 'react';
import HeaderTagsLayout from './headerTagsLayout';
import LogoTabsLayout from './logoTabsLayout';
import SearchPriceLayout from './searchPriceLayout';

import './header.css'

const Header = ({latestPrice, change, changePercent, exchange, sector}) => {

    return (
        <div className="header-wrapper">
            <LogoTabsLayout/>
            <SearchPriceLayout latestPrice={latestPrice} change={change} changePercent={changePercent}/>
            <HeaderTagsLayout exchange={exchange} sector={sector}/>
        </div>
    );
}

export default Header;