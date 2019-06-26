import React from 'react'

const CompanyTags = ({exchange, sector}) =>{
    return(
        <div className='company-tags'>
            <span>{exchange}</span>
            <span>{sector}</span>
        </div>
    );
}

export default CompanyTags;