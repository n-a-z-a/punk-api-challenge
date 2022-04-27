import React from 'react'
import FilterItem from '../../components/FilterItem/FilterItem'
import './FiltersList.scss'

const FiltersList = ({
    isHighABV, 
    handleABVCheckbox,
    isClassic, 
    handleClassicCheckbox, 
    isAcidic,
    handleAcidicCheckbox
  }) => {

  return (
    <div className='filters-list'>
        <FilterItem 
          checkbox={isHighABV} 
          handleCheckbox={handleABVCheckbox} condition="high-abv"
          name = "High ABV ( > 6%)"
        />
        <FilterItem 
          checkbox={isClassic} 
          handleCheckbox={handleClassicCheckbox} condition="classic"
          name = "Classic Range"
        />
         <FilterItem 
          checkbox={isAcidic} 
          handleCheckbox={handleAcidicCheckbox} condition="acidic"
          name = "Acidic (ph < 4)"
        />
    </div>
  )
}

export default FiltersList