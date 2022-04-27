import React from 'react'
import './SearchBox.scss'

const SearchBox = ({searchTerm, handleInput, searchCount}) => {

  let searchResultText = searchCount === 1 ? 'We have 1 beer' : `We have ${searchCount} beers`
  
  return (
    <form className='search-container'>
        <input type="text" 
        placeholder="Search beers by name" 
        value={searchTerm} 
        onInput={handleInput}
        className='searchbox'/>
        <p className='results-message'>{searchResultText}</p>
    </form>
  )
}

export default SearchBox