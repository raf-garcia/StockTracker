import React from 'react';
import SearchListItem from './searchListItem';

const SearchList = ({searchText, companyNames, fetchCompanyNames, searchAction, filterSearchList}) => {

    const searchSuggestions = filterSearchList(companyNames, searchText);
    return (

        <ul className="header__search-list">
        {
            searchSuggestions.map(
            (companyName) => {
                const {name, symbol} = companyName;
                return <SearchListItem key={symbol} symbol={symbol} name={name} searchAction={searchAction}/>
            })
        }
        </ul>
    );
}

export default SearchList;