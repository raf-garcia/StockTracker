import React from 'react';
import KeyStatsItem from './keyStatsItem';

const KeyStatsList = ({ companyStats }) => {
    return (
        <div>
            <h2>Key Stats</h2>
            <ul>
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