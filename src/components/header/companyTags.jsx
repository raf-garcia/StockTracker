import React from 'react'

const CompanyTags = ({exchange, sector}) =>{
    return(
        <div className='company-tags'>
            <span>exchange: {exchange}</span>
            {' '}
            <span>sector: {sector}</span>
        </div>
    );
}

export default CompanyTags;