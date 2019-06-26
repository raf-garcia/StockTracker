import React from 'react'
import { AdaptiveLogo } from './adaptiveLogo';
import HeaderTabs from './headerTabs';

const LogoTabsLayout = () => {
    return(
    <div className="header-wrapper--top">
        <AdaptiveLogo />
        <HeaderTabs />
    </div>
    );
}

export default LogoTabsLayout;