import React from 'react';

const CompanyInfo = ({ companyInfo }) => {
  const { companyName, symbol, description, website } = companyInfo;

  return (
    <div>
      <h2 className="heading-section">Company Overview</h2>
      <h2>{companyName} ({symbol})</h2>
      <span><a href={website}>{website}</a></span>
      <p>{description}</p>
    </div>
  );
}

export default CompanyInfo;