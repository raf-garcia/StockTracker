import React from 'react';
import CompanyTags from './companyTags';
import MarketStatus from './marketStatus';


const HeaderTagsLayout = ({exchange, sector}) => {

    return (
       <div className="header-bottom">
           <CompanyTags exchange={exchange} sector={sector}/>
           <MarketStatus />
       </div>
        
    );
}

export default HeaderTagsLayout;