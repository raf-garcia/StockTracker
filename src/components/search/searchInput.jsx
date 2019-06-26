import React, { useState } from 'react';
import SearchListContainer from '../searchList/searchListContainer';

const SearchInput = ({ searchAction }) => {
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
        <input type="text" value={searchText} onChange={input => setSearchText(input.target.value)} size="100%" />
      </form>
      <SearchListContainer searchText={searchText} searchAction={handleSubmit}/>
    </>
  );
}

export default SearchInput;