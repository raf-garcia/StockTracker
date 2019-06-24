import React from 'react';
import { urlFormatter } from '../../util/urlFormatter';

const CompanyInfo = ({ companyInfo }) => {
  const { companyName, symbol, description, website } = companyInfo;

  return (
    <div className="section-companyInfo">
      <h2 className="heading-section">Company Overview</h2>
      <h2 className="section-companyInfo__name">{companyName} ({symbol})</h2>
      <span><a className="section-companyInfo__link" href={website}>{urlFormatter(website)}</a></span>
      <p className='section-companyInfo__description'>{description}</p>
    </div>
  );
}

export default CompanyInfo;