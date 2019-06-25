import React, {useEffect} from 'react';
import SearchListItem from './searchListItem';
import {filterSearchList} from './filterSearchList';

const SearchList = ({searchText, companyNames, fetchCompanyNames, searchAction}) => {

    useEffect(() => {
        fetchCompanyNames();
    }, []);

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