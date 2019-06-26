export function filterSearchList(companyNamesList, searchText){

  return (searchText == '') ? [] : companyNamesList.filter( company => {
    return (
      company.name.toLowerCase().startsWith(searchText.toLowerCase()) 
      ||
      company.symbol.toLowerCase().startsWith(searchText.toLowerCase())
    );
  }).slice(0,5);
}