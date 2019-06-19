import React from 'react';
import {addCommasToNumber } from '../../util/numberFormatter';

const keyStatElement = ({name, value}) => {
    if (!isNaN(value)){
        value = addCommasToNumber(value);
    }

    if (value != null && typeof value == "object")
        return <li><span>{name}</span> <span>{value.low}</span> - <span>{value.high}</span></li>
    
    return <li><span>{name}</span> <span>{value}</span></li>
}

export default keyStatElement;