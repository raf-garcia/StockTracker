import React from 'react'

const SearchListItem = ({name, symbol, searchAction}) => {
  return (symbol) ?
  <li onClick={() => searchAction(symbol)}>{name} ({symbol})</li> :
  <li>{name}</li>;
}

export default SearchListItem;