import React from 'react'

const CompanyTags = ({exchange, sector}) =>{
    return(
        <div>
            <span>exchange: {exchange}</span>
            {' '}
            <span>sector: {sector}</span>
        </div>
    );
}

export default CompanyTags;