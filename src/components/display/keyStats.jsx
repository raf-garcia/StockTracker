import React from 'react';
import KeyStatElement from './keyStatElement';

const keyStats = ({ companyStats }) => {
    return (
        <div>
            <h2>Key Stats</h2>
            <ul>
                {companyStats.map((apiData, index) => {
                    const { name, value } = apiData;
                    return (
                      <KeyStatElement key={index} name={name} value={value} /> 
                    );
                })}
            </ul>
        </div>
    );
}

export default keyStats;