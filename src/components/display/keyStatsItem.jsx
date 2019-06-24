import React from 'react';
import {addCommasToNumber} from '../../util/numberFormatter';

const KeyStatsItem = ({name, value}) => {
    if (!isNaN(value)){
        value = addCommasToNumber(value);
    }

    if (name.toLowerCase().includes("range")) {
        if( value.low != null){
            return (
                <li className="section-keyStats__list-item">
                    <span className="section-keyStats__list-item--label">{name}</span>
                    <span className="section-keyStats__list-item--value">{value.low} - {value.high}</span>
                </li>
            );
        }
        else {
            return (
                <li className="section-keyStats__list-item">
                    <span className="section-keyStats__list-item--label">{name}</span>
                </li>
            );
        }
    };
    
    return (
        <li className="section-keyStats__list-item">
            <span className="section-keyStats__list-item--label">{name}</span>
            <span className="section-keyStats__list-item--value">{value}</span>
        </li>
    );
}

export default KeyStatsItem;