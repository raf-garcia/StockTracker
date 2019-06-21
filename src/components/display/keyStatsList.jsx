import React from 'react';
import KeyStatsItem from './keyStatsItem';

const KeyStatsList = ({ companyStats }) => {
    return (
        <div className="section-keyStats">
            <h2 className="heading-section">Key Stats</h2>
            <ul className="section-keyStats__list">
                {companyStats.map((apiData) => {
                    const { name, value } = apiData;
                    return (
                      <KeyStatsItem key={name} name={name} value={value} /> 
                    );
                })}
            </ul>
        </div>
    );
}

export default KeyStatsList;