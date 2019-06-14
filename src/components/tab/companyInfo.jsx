import React from 'react';

const CompanyInfo = ({ companyInfo }) => {
  const { companyName, symbol, description, website } = companyInfo;

  return (
    <div>
      <h4>Company Overview</h4>
      <h2>{companyName} ({symbol})</h2>
      <span><a href={website}>{website}</a></span>
      <p>{description}</p>
    </div>
  );
}

export default CompanyInfo;