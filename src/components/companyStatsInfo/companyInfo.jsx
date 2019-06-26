import React from 'react';
import { urlFormatter } from '../../util/urlFormatter';

const CompanyInfo = ({ companyInfo }) => {
  const { companyName, symbol, description, website } = companyInfo;

  return (
    <div className="section-companyinfo">
      <h2 className="heading-section">Company Overview</h2>
      <h2 className="section-companyinfo__name">{companyName} ({symbol})</h2>
      <span><a className="section-companyinfo__link" href={website}>{urlFormatter(website)}</a></span>
      <p className='section-companyinfo__description'>{description}</p>
    </div>
  );
}

export default CompanyInfo;