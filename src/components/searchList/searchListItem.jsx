import React from 'react'

const SearchListItem = ({name, symbol, searchAction}) => {
  return <li onClick={() => searchAction(symbol)}>{name} ({symbol})</li>;
}

export default SearchListItem;