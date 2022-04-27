import React from 'react'
import SearchBox from '../../components/SearchBox/SearchBox'
import FiltersList from '../FiltersList/FiltersList'

const NavBar = (props) => {
  const {searchTerm, 
    handleInput, 
    isHighABV, 
    handleABVCheckbox, 
    isClassic, 
    handleClassicCheckbox,
    isAcidic,
    handleAcidicCheckbox,
    searchCount
    } = props

  return (
    <>
    <SearchBox 
      searchTerm={searchTerm} 
      handleInput={handleInput}
      searchCount={searchCount}
    />
    <FiltersList 
      isHighABV={isHighABV}
      handleABVCheckbox={handleABVCheckbox}
      isClassic={isClassic}
      handleClassicCheckbox={handleClassicCheckbox}
      isAcidic={isAcidic}
      handleAcidicCheckbox={handleAcidicCheckbox}
      searchCount={searchCount}
    />
    </>
  )
}

export default NavBar