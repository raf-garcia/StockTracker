export function filterSearchList(companyNamesList, searchText){

  if(searchText === '') return [];

  let searchSuggestions = companyNamesList.filter( company => {
    return (
      company.name.toLowerCase().startsWith(searchText.toLowerCase()) 
      ||
      company.symbol.toLowerCase().startsWith(searchText.toLowerCase())
    );
  }).slice(0,5);

  return (searchSuggestions.length === 0) ? [{name: 'No Matches Found', symbol: null}] : searchSuggestions;
}

export function validateSearch(companyNamesList, searchText){

  if(searchText === '') return false;

  let searchSuggestions = companyNamesList.filter( company => {
    return (
      company.name.toLowerCase().startsWith(searchText.toLowerCase()) 
      ||
      company.symbol.toLowerCase().startsWith(searchText.toLowerCase())
    );
  });
  return (searchSuggestions.length !== 0);

}