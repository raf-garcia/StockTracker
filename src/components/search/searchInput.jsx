import React, { useCallback, useState } from 'react';
import SearchListContainer from '../searchList/searchListContainer';

export const SearchInput = ({ searchAction }) => {
  const [searchText, setSearchText] = useState('');

  const handleSubmit = useCallback(event => {
    event.preventDefault();
    searchAction(searchText);
  },
    [searchAction, searchText]
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchText} onChange={input => setSearchText(input.target.value)} size="100%" />
      </form>
      <SearchListContainer searchText={searchText} searchAction={searchAction}/>
    </>
  );
}

export default SearchInput;