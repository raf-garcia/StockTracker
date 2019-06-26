import React from 'react';
import CompanyTags from './companyTags';
import MarketStatus from './marketStatus';


const HeaderTagsLayout = ({exchange, sector, lastUpdate}) => {

    return (
       <div className="header-bottom">
           <CompanyTags exchange={exchange} sector={sector}/>
           <MarketStatus lastUpdate={lastUpdate}/>
       </div>
        
    );
}

export default HeaderTagsLayout;