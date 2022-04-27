import React from 'react'

const SearchBox = ({searchTerm, handleInput, searchCount}) => {

  let searchResultText = searchCount == 1 ? 'Found 1 beer' : `Found ${searchCount} beers`
  
  return (
    <form>
        <input type="text" 
        placeholder="Search beers by name" 
        value={searchTerm} 
        onInput={handleInput}/>
        <p>{searchResultText}</p>
    </form>
  )
}

export default SearchBox