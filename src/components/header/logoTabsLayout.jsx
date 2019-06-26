import React from 'react'
import { AdaptiveLogo } from './adaptiveLogo';
import HeaderTabs from './headerTabs';
import Errors from './errors';

const LogoTabsLayout = () => {
    return(
    <>
        <div className="header-wrapper--top">
            <AdaptiveLogo />
            <HeaderTabs />
        </div>
        <Errors/>
    </>
    );
}

export default LogoTabsLayout;