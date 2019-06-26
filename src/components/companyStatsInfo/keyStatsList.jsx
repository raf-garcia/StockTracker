import React from 'react';
import KeyStatsItem from './keyStatsItem';

const KeyStatsList = ({ companyStatsLeft, companyStatsRight }) => {
    return (
        <div className="section-keystats">
            <h2 className="heading-section">Key Stats</h2>
            <div className="section-keystats__list">
                <ul>
                    {companyStatsLeft.map((apiData) => {
                        const { name, value } = apiData;
                        return (
                            <KeyStatsItem key={name} name={name} value={value} />
                        );
                    })}
                </ul>

                <ul>
                    {companyStatsRight.map((apiData) => {
                        const { name, value } = apiData;
                        return (
                            <KeyStatsItem key={name} name={name} value={value} />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default KeyStatsList;