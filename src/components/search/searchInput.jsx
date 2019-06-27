import React, { useState, useEffect } from 'react';
import SearchList from '../searchList/searchList';
import {filterSearchList, validateSearch} from './filterSearchList';

const SearchInput = ({ searchAction, symbol, companyName, companyNames, fetchCompanyNames }) => {
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchCompanyNames();
}, []);

  const handleSubmit = () => {
    //reset the searchText on the input field
    let search = searchText;

    if(validateSearch(companyNames, search)) {
      setSearchText('');
      searchAction(search);
    }
    
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
      <i className="fas fa-search"></i>
        <input type="text" value={searchText} onChange={input => setSearchText(input.target.value)} placeholder={(companyName != null) ? `${companyName} (${symbol})` : 'Search' }/>
      </form>
      <SearchList searchText={searchText} searchAction={handleSubmit} companyNames={companyNames} filterSearchList={filterSearchList}/>
    </>
  );
}

export default SearchInput;