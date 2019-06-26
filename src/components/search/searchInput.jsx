import React, { useState } from 'react';
import SearchListContainer from '../searchList/searchListContainer';

const SearchInput = ({ searchAction, symbol, companyName }) => {
  const [searchText, setSearchText] = useState('');

  const handleSubmit = () => {

    //reset the searchText on the input field
    let search = searchText;
    setSearchText('');

    searchAction(search);
    
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchText} onChange={input => setSearchText(input.target.value)} placeholder={(companyName != null) ? `${companyName} (${symbol})` : 'Search' }/>
      </form>
      <SearchListContainer searchText={searchText} searchAction={handleSubmit}/>
    </>
  );
}

export default SearchInput;